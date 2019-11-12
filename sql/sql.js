//Austin Formagin
//November, 2019
//TicketMan SQL functions
const mysql = require('mysql');
let config = require('./config.js');

let debug = true;

if (debug){
    // createTicket("Test Author", "Another testing description!");
    searchTicketByID(2);
    searchTicketByUser("Test Author");
    listTickets()
;}

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

    connection.end();
}

function searchTicketByID(ticketID) {
    let connection = mysql.createConnection(config);
    let ticketInfo = `SELECT * FROM tickets WHERE id=` + connection.escape(ticketID);
    var ticket;
    connection.query(ticketInfo, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return -1;
        }
        ticket = results;
        console.log(results);
    });
    connection.end();
}

function searchTicketByUser(author){
    let connection = mysql.createConnection(config);
    let ticketInfo = `SELECT * FROM tickets WHERE author=` + connection.escape(author);
    var ticket;
    connection.query(ticketInfo, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return -1;
        }
        ticket = results;
        console.log(results);
    });
    connection.end();
    return ticket;
}

function editTicket(newDesc, ticketID){
    let connection = mysql.createConnection(config);
    let ticketInfo = `UPDATE tickets SET description=` + connection.escape(newDesc) + ` WHERE id=` +
        connection.escape(ticketID);
    connection.query(ticketInfo, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return -1;
        }
        console.log("Ticket with ID: " + results.id + " with the following description: " + results.description);
    });
}

function listTickets(){
    let connection = mysql.createConnection(config);
    let ticketInfo = `SELECT * FROM tickets`;
    var tickets;
    connection.query(ticketInfo, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return -1;
        }
        tickets = results;
        console.log(results);
    });
    connection.end();

    return tickets;
}



