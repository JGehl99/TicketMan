const mysql = require('mysql');


connect();

/**
 * Establishes connection to the host database
 */
function connect(){
    //TODO have username and password load from config file
    const con = mysql.createConnection({
        host: "localhost",
        user: "NotMyUser",
        password: "NotMyPassword"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

