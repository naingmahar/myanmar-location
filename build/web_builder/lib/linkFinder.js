const fs = require('fs');
const readline = require('readline');
class LinkFinder {
    /**
     * @type {Array<{ variable: string, path: string }>} links
     */
    links = [];
    /**
    * @param {{
    * importKey:Array<{key:string,start:string,end:string}>,
    * rootDir:string,
    * sourceFile:string,
    * outputDir:string,
    * outputFile:string}} config from .cfg
    */
    constructor(config) {
        this.config = config;
        this.workingIndex = 0;
    }
    async fileWorker(file = "") {
        const path = this.config.rootDir + file;
        const fileStatus = await this.filePathChecker(path);
        if (!fileStatus)
            return;
        await this.fileReader(path);
    }
    extractWordForImport(importString = "", parientPath = " ") {
        if (importString.search("{") >= 0)
            return null;
        const result = importString
            .replace(/'/g, "")
            .replace(/\*/g, "")
            .replace(" as ", "")
            .split(" ");
        if (result.length < 4)
            return null;
        const parientPathArray = parientPath.replace(/\//g, "/*").split("*");
        parientPathArray.pop();
        const path = parientPathArray
            .toString()
            .replace(/,/g, "")
            .replace(this.config.rootDir, "") +
            result[result.length - 1].replace(".", "") + ".ts";
        return ({
            variable: result[1],
            path: path.replace("//", "/")
        });
    }
    extractword(str = "", key = "") {
        let startindex = str.search(start);
        let endindex = str.search(end);
        if (startindex != -1 && endindex != -1 && endindex > startindex)
            return str.substring(startindex + start.length + 1, endindex - 1);
    }
    async filePathChecker(name = "") {
        let isFile = await fs.lstatSync(name).isFile();
        if (isFile)
            return true;
        return false;
    }
    async fileReader(path = "") {
        const fileStream = fs.createReadStream(path);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            this.config.importKey.map(row => {
                const lineLindex = line.search(row.key);
                if (lineLindex != -1) {
                    let link;
                    if (row.key === "import") {
                        link = this.extractWordForImport(line, path);
                    }
                    if (link)
                        this.links.push(link);
                    // const link = this.extractword(line, row.start, row.end)
                    return;
                }
            });
        }
    }
    async getLinks() {
        await this.fileWorker(this.config.sourceFile);
        while (true) {
            if (this.links.length === this.workingIndex)
                break;
            await this.fileWorker(this.links[this.workingIndex].path);
            this.workingIndex += 1;
        }
        return this.links;
    }
}
module.exports = LinkFinder;
