var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Node is kinda neat!',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

console.log('End of program file');

