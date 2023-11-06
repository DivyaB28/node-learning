const path = require("path");

console.log(path.sep); //this returns platform specific seperator
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);