var mysql = require('mysql2');

require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: 'sakila',
    debug: false,
    multipleStatements: true
})

// creating a database
// var sql = `
// create database niket;
// `

// creating a table inside a database
// var sql = `
// use niket;
// create table examination (subject_code varchar(6), subject_code varchar(50), marks int(10), grade varchar(2)); 
// `

// adding primary key to the table
// var sql = `
// use niket;
// alter table examination add primary key(subject_code);
// desc examination;
// `

//inserting a record into the table
// var sql = `
// use niket;
// insert into examination (subject_code, subject_name, marks, grade)
//     values 
//         ('CSE100', 'OOPs', 70, 'B+'),
//         ('CSE101', 'OS', 90, 'A+'),
//         ('CSE102', 'DBMS', 60, 'B'),
//         ('CSE103', 'Networking', 85, 'A');
// `

//selecting all the tuples from table
// var sql = `
// use niket;
// select * from examination;
// select subject_name, marks from examination;
// `

//where clause
// var sql = `
// use niket;
// select * from examination 
// where subject_code in ('CSE101', 'CSE102');
// `

//order by clause
// var sql = `
// use niket;
// select * from examination
// order by marks DESC;
// `

//deleting records from the table
// var sql = `
// use niket;
// delete from examination where subject_code = 'CSE103';
// `

// deleting a table / dropping a table
// var sql = `
// use niket;
// drop table if exists examination;
// `

// update existing tuple
// var sql = `
// use niket;
// update examination
// set marks = 63
// where subject_code = 'CSE101';
// `


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;