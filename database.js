const mysql = require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:'password',
    database:'cruddb'
})

db.connect((err)=>{
    if(err) console.log(err);
    else console.log("db connected")

})

module.exports = db;