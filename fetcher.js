const request = require('request');
// const writefile = require('./index.js');
const fs = require('fs');
const input = process.argv[2];
const path = process.argv[3];

const fetchSave = function(input, path) {
  request(input, (error, response, body) => {
    if(error) {
      console.log("failure to download")
      return;
    }
    fs.writeFile(path, body, (error) => {
      if (error) { 
        console.log(error);
         } else {
         console.log(`Downloaded and saved ${body.length} bytes to ./index.html`) 
         }     
    })
  });
}
if(!input) {
  console.log("address invalid");
} else if(!path) {
  console.log("path to file not valid")
} else (fetchSave(input, path));

