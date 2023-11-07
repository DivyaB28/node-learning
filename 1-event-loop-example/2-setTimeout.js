// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
//async function will get offloaded
console.log("third");
// completed and exited operating system process
//output
// first
// third
// second
