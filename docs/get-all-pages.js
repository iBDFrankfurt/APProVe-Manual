const fs = require('fs');
const path = require('path');

// Function to recursively traverse folders and collect HTML file paths
function traverseFolders(folderPath, rootPath) {
    const files = fs.readdirSync(folderPath);
    const folderContent = {};

    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const isDirectory = fs.statSync(filePath).isDirectory();

        if (isDirectory && file !== '.vuepress') {
            folderContent[file] = traverseFolders(filePath, rootPath);
        } else if (path.extname(file) === '.md') {
            const relativePath = path.relative(rootPath, filePath);
            const htmlPath = `/${relativePath.replace(/\\/g, '/').replace('.md', '.html')}`;
            folderContent[file.replace('.md', '')] = htmlPath;
            if(file === 'README.md' || file === 'readme.md') {
                const baseDirPath = htmlPath.replace("/README.html", "").replace("/readme.html", "")
                folderContent[file.replace('.md', '')] = baseDirPath;
            }
        }
    });

    return folderContent;
}

// Replace 'path/to/your/docs' with the actual path to your docs folder
const docsPath = path.resolve(__dirname, '');

// Start traversing folders from the specified path
const folderStructure = traverseFolders(docsPath, docsPath);

// Write the collected folder structure to a JSON file
const jsonOutputPath = path.resolve(__dirname, 'site-list.json');
const jsonContent = JSON.stringify(folderStructure, null, 2);

fs.writeFileSync(jsonOutputPath, jsonContent);

console.log(`JSON file created at: ${jsonOutputPath}`);
