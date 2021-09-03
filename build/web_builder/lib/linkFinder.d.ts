export = LinkFinder;
declare class LinkFinder {
    /**
    * @param {{
    * importKey:Array<{key:string,start:string,end:string}>,
    * rootDir:string,
    * sourceFile:string,
    * outputDir:string,
    * outputFile:string}} config from .cfg
    */
    constructor(config: {
        importKey: Array<{
            key: string;
            start: string;
            end: string;
        }>;
        rootDir: string;
        sourceFile: string;
        outputDir: string;
        outputFile: string;
    });
    /**
     * @type {Array<{ variable: string, path: string }>} links
     */
    links: Array<{
        variable: string;
        path: string;
    }>;
    config: {
        importKey: Array<{
            key: string;
            start: string;
            end: string;
        }>;
        rootDir: string;
        sourceFile: string;
        outputDir: string;
        outputFile: string;
    };
    workingIndex: number;
    fileWorker(file?: string): Promise<void>;
    extractWordForImport(importString?: string, parientPath?: string): {
        variable: string;
        path: string;
    };
    extractword(str?: string, key?: string): string;
    filePathChecker(name?: string): Promise<boolean>;
    fileReader(path?: string): Promise<void>;
    getLinks(): Promise<{
        variable: string;
        path: string;
    }[]>;
}
