export = CodeCleaner;
declare class CodeCleaner {
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
    constructor(config: {
        importKey: Array<{
            key: string;
            start: string;
            end: string;
        }>;
        rootDir: string;
        sourceFile: string;
        outputDir: string;
        name: string;
        clean: Array<{
            key: string;
            var: boolean;
        }>;
        outputFile: string;
    }, links: Array<{
        variable: string;
        path: string;
    }>);
    config: {
        importKey: Array<{
            key: string;
            start: string;
            end: string;
        }>;
        rootDir: string;
        sourceFile: string;
        outputDir: string;
        name: string;
        clean: Array<{
            key: string;
            var: boolean;
        }>;
        outputFile: string;
    };
    links: {
        variable: string;
        path: string;
    }[];
    codes: string;
    fileManager(): Promise<void>;
    /**
     * @param {{ variable: string, path: string }} info
     */
    lineRemover(line: string, info: {
        variable: string;
        path: string;
    }): void;
    /**
     * @param {{ variable: string, path: string }} info
     */
    fileReader(info: {
        variable: string;
        path: string;
    }): Promise<void>;
    getCode(): Promise<string>;
}
