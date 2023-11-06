/* Browser 

DOM
Window
Interactive apps
No Filesystem
Fragmentation
ES6 Modules

*/
/* Node.js

NO DOM
NO Window
Server Side Apps
Filesystem
Versions
CommonJS

*/

//There are GLOBAL variables , no WINDOW

//__dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
//process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
  console.log("Hello");
}, 1000);
