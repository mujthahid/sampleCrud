const mysql = require('mysql2')

//setting database connection parameters

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:'password',
    database:'cruddb',
    port:3306
})

//creating new database connection

db.connect((err)=>{
    if(err) console.log(err);
    else console.log("db connected")

})

module.exports = db;