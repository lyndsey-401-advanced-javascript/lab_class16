'use strict';

const events = require('./events.js');

const fs = require('fs');

const alterFile = (file) => {
  //reads file
  fs.readFile( file, (err, data) => {
    //error throw
    if(err) { throw err; } 
    //data to string, to uppercase
    let text = data.toString().toUpperCase();
    //write file 
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      //throw error
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
