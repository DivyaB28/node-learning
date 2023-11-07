// npm - global command, comes with node
//  npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)
//npx create-react-app my-app (globally)
// npx- package runner tool comes with npm5.0+

// package.json  - manifest file(stores important info about projct/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello people");
