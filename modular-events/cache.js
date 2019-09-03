'use strict';

const events = require('./events.js');
const fs = require('fs');

events.read('read', readFile); //opens the file and reads it
events.toString('contents', toString) //changes file contents to string
events.toUpperCase('string', toUpperCase) //changes string to uppercase
events.writeFile('uppercase', writeFile) //writes back to file system


function handleSave(payload) {
  console.log(`You saved ${payload.id}`);

  events.emit('cache-update', { id: payload.id });
};

function handleDelete(payload) {
  console.log(`You deleted ${payload.id}`);

  events.emit('cache-update', { id: payload.id });
};

module.exports = {
  handleSave,
  handleDelete,
}


