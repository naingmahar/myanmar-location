const fs = require('fs');
const LinkFinder = require('./lib/linkFinder');
const CodeCleaner = require('./lib/codeCleaner');
main = async () => {
    try {
        const configRaw = await fs.readFileSync("config.json", "utf-8");
        /**
         * @type {{
         * importKey:Array<{key:string,start:string,end:string}>,
         * rootDir:string,
         * sourceFile:string,
         * outputDir:string,
         * removeTypeFileAndIndexFile:string[],
         * outputFile:string}} config fron .cfg
         */
        const config = JSON.parse(configRaw);
        let links = await new LinkFinder(config).getLinks();
        let finalLinks = links.filter((link) => {
            return config.removeTypeFileAndIndexFile.indexOf(link.path) == -1;
        });
        // console.log(links)
        console.log(finalLinks);
        const newCodes = await new CodeCleaner(config, finalLinks).getCode();
        await fs.writeFileSync(config.outputDir + config.outputFile, newCodes);
    }
    catch (error) {
        console.error("Error", error);
    }
};
main();
