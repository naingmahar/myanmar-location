const fs = require("fs")
const PATH = "./build"
let files = []
let removeFiles = [`web.builder.d.ts`, `web.builder.js`]
let sourcePath = "./build/"
let sourceFile = "index"
let exportFile = "bundle.js"
let exportPath = "./web/"

let source = sourcePath + sourceFile
let newCode = "use strict;"
let exportLinks = []

const readline = require('readline');

const removeLineKeyword = [
   {key: "use strict",isImport:false},
   { key: "require\\(", isImport: true ,end: '\\)' },
   { key: "exports.default", isImport: false },
   { key: "exports", isImport: false },
   {key:"/\\/",isImport:false},
]

const codWriter = async (code) => {
   await fs.writeFileSync(`${exportPath}${sourceFile}`,code)
}

const refreshCode = async (path) => {
   // const isFile = await fs.lstatSync(path).isFile()
   // if(!isFile) path+="index.js"
   const fileStream = fs.createReadStream(path+".js")
   const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
   });

   
   for await (const line of rl) {
      let isRemoveLine = false
      
      for (let i = 0; i < removeLineKeyword.length; i++){
         let remove = removeLineKeyword[i]
            const lineLindex = line.search(remove.key)
         if (lineLindex >= 0) {
            if (remove.isImport) {
               if (remove.isImport)await externalLinkBind(line,remove)
            }
               isRemoveLine = true
               break
            }
      }
      
      if (!isRemoveLine) {
         newCode += "\n" + line
      }
      
   }
}

// externalLinkFinder = (path="") => {
//    const fileStream = fs.createReadStream(path)
//    const rl = readline.createInterface({
//       input: fileStream,
//       crlfDelay: Infinity
//    });

//    for await (const line of rl) {

//    }
// }

extractword = (str = "", start="", end="") => {
   var startindex = str.search(start);
   var endindex = str.search(end);
   if (startindex !=-1 && endindex !=-1 &&  endindex  > startindex )
     return str.substring(startindex+start.length+1 , endindex-1 )
 }

const externalLinkBind = async (line,opt={ key: "", isImport: true ,end: '' }) => {
   const path = extractword(line, opt.key, opt.end)
   // const path = extractword(line, opt.key, opt.end)
   await refreshCode(sourcePath+path)
}

const main = async () => {
   fs.readdir(PATH, (err, files) => {
      removeFiles.map((remove) => {
         const index = files.findIndex((file) => file === remove)
         if(index >= 0) fs.unlinkSync(`${PATH}/${remove}`,{force:true})
      }) 
   })

   await refreshCode(source)
   console.warn(newCode)
}

main()



