const { createServer } = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const userutils = require('./src/utils.js');
const validator = require('validator');
const argv = process.argv[1];
const command = process.argv[2];

const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
        },
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
    },
  handler: function () {
    console.log('Adding a new note via Yargs!');
    console.log('Title: ' + argv);
    console.log('Body: ' + argv.body);
  }
})

//console.log(yargs.argv);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
  }

const bookJSON = JSON.stringify(book);
const bookObject = JSON.parse(bookJSON);

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
      console.log('Guest list for ' + this.name)
      this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
  }
  //event.printGuestList()

  //console.log('Thing one');
  //    debugger ;
  //  console.log('Thing two');


const squareAlt = (x) => x * x;
const thAlt = (x) => x * x * x;
//console.log(squareAlt(2));
//console.log(thAlt(2));

const users = [{
      name: 'Andrew Mead',
      age: 27
    },{
      name: 'Peter Saman',
      age: 48
    },{
      name: 'Clay Klay',
      age: 45
  }]
const user = users.find((user) => user.name === 'Peter Saman')
//console.log(user.age);

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(' Hello World 2');
  //console.log(validator.isURL('https/mead.io')) 
    
  
});

  //console.log('Starting')
    // Wait 2 seconds before running the function
    //setTimeout(() => {
      //  console.log('2 Second Timer')
    //}, 2000)
    //console.log('Stopping')
  
    const request = require('request');
    const url ="https://jsonplaceholder.typicode.com/todos/1";
    request({ url: url }, (error, response) => {
    // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body)
    // Will print the current temperature to the console
    console.log(data);
})

server.listen(port, hostname, () => {
    
    //console.log(`User: ${user.getName()}`);
    console.log(`Server running at http://${hostname}:${port}/`);
    //fs.writeFileSync('notes.txt', 'I live in Philadelphia');

  //console.log(`Showing some arugments:` + argv);
  //if (command === 'add') {
      //console.log('         Adding note!')
  //} 


});
