const amount = 12;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// console.log("Hey its my first node app");

// Modules - Encapsulated Code (only share minimum)
// Node uses CommonJs library, every file in node is module

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mine-grenade");
// sayHi(names.john);

// Node has built-in modules: https://nodejs.org/dist/latest-v20.x/docs/api/
// OS, PATH, FS, HTTPsx
