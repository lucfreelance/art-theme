import path from "path";
import { promises as fs } from "fs";
import { globby } from "globby";
import grayMatter from "gray-matter";

(async function () {
    const publicDir = path.join(process.cwd(), "public");
    const contentDir = path.join(process.cwd(), "./article");
    const indexFile = path.join(publicDir, "search-index.json");
    const getSlugFromPathname = (pathname) =>
        path.basename(pathname, path.extname(pathname));

    const contentFilePaths = await globby(["**/*.md", "!drafts/**/*.md"], {
        cwd: contentDir,
    });

    if (contentFilePaths.length) {
        const files = contentFilePaths.map(
            async (filePath) =>
                await fs.readFile(
                    path.resolve(process.cwd(), "./article", filePath),
                    "utf8"
                )
        );
        const index = [];
        let i = 0;
        for await (let file of files) {
            const {
                data: { title, description, tags },
                content,
            } = grayMatter(file);
            index.push({
                slug: getSlugFromPathname(contentFilePaths[i]),
                category: "blog",
                title,
                description,
                tags,
                body: content,
            });
            i++;
        }
        await fs.writeFile(indexFile, JSON.stringify(index));
        console.log(
            `Indexed ${index.length} documents from ${contentDir} to ${indexFile}`
        );
    }
})();
