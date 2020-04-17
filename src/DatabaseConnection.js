import React, {Component} from 'react';
//const sqlite3 = require('sqlite3').verbose();
//import sqlite3 from 'sqlite3'
class DatabaseConnection {
    //db = null
    constructor (){
       // this.db = new sqlite3.Database('./sample.db')
    }
    addNewUser(username,name,password){
        this.db.run('CREATE TABLE IF NOT EXISTS users(name text)')
        console.log('New user is registered')
    }
    addTasks(username,task){
        this.db.run('INSERT INTO '+username+'(name) VALUES(?)', [task], function(err) {
            if (err) {
              return console.log(err.message);
            }
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
    }
    readData(username){
        let sql = 'SELECT name FROM '+username+' ORDER BY name';
        //console.log(sql)
            this.db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.name);
            });
            });
    }
}

