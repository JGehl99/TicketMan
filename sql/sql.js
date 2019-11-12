//Austin Formagin
//November, 2019
//TicketMan SQL functions
const mysql = require('mysql');
let config = require('./config.js');

let debug = true;

if (debug)
    createTicket("Test Author", "Another testing description!");

function createTicket(author, desc){
    //Opens a connection with the Database
    let connection = mysql.createConnection(config);

    //Get the current time
    //TODO ^ This <--- Will worry about this later
    //Set the opening status
    let o = false;

    let values = [author, desc, o];
    let ticketInfo = `INSERT INTO tickets (author, description, open) VALUES(?, ?, ?)`;
    connection.query(ticketInfo, values, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        //Prints the ID of the newly created ticket
        console.log('Created Ticket with ID:' + results.insertId);
    });

    // console.log("Data added to table");
    connection.end();
}


