const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

console.log("Going to write into existing file!");

Promise.try(() => {
	return fs.writeFileAsync("input.txt", "Promises are cool!");
}).then(() => {
	console.log("Data written successfully!");
	console.log("Let's read newly written data");

	return fs.readFileAsync("input.txt");
}).then((data) => {
	console.log(`Asynchronous read: ${data.toString()}`);
});

console.log('End of Program');
