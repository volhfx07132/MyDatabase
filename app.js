const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : '123456',
    database : 'nodemysql'
});

db.connect((err) => {
   if(err){
       throw err;
   }
   console.log("Mysql connected..");
});

app.listen('3000', () => {
    console.log("Server listening on post 3000");
})