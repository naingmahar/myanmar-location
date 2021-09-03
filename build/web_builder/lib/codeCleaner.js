const fs = require('fs');
const readline = require('readline');
class CodeCleaner {
    /**
    * @param {{
    * importKey:Array<{key:string,start:string,end:string}>,
    * rootDir:string,
    * sourceFile:string,
    * outputDir:string,
    * name:string,
    * clean:Array<{ key: string, var: boolean }>,
    * outputFile:string}} config from .cfg
    * @param {Array<{ variable: string, path: string }>} links
    */
    constructor(config, links) {
        this.config = config;
        this.links = links;
        this.codes = "";
    }
    async fileManager() {
        for (let i = 0; i < this.links.length; i++) {
            await this.fileReader(this.links[this.links.length - 1 - i]);
        }
        await this.fileReader({ path: this.config.sourceFile, variable: this.config.name });
    }
    /**
     * @param {{ variable: string, path: string }} info
     */
    lineRemover(line = "", info) {
        let newLine = "";
        let overWrite = false;
        this.config.clean.map(row => {
            const lineLindex = line.search(row.key);
            if (lineLindex != -1) {
                if (row.var) {
                    overWrite = true;
                    return;
                }
                else {
                    overWrite = true;
                    newLine = "let " + String(line).replace(row.key, info.variable + " = ");
                    return;
                }
            }
        });
        if (overWrite) {
            this.codes += "\n" + newLine;
        }
        else {
            this.codes += "\n" + line;
        }
    }
    /**
     * @param {{ variable: string, path: string }} info
     */
    async fileReader(info) {
        const fileStream = fs.createReadStream(this.config.rootDir + info.path);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            if (String(line).search("//") === -1) {
                this.lineRemover(line, info);
            }
        }
    }
    async getCode() {
        await this.fileManager();
        return this.codes;
    }
}
module.exports = CodeCleaner;
