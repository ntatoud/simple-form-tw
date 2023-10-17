const express = require("express");
const router = require("express").Router();
const mysql = require("mysql2");

/* Initiate the connexion to the database
 *   (you should create a user beforehand
 *   and replace the credentials with yours)
 */
const db = mysql.createConnection({
  host: "localhost",
  user: "formApp",
  password: "password",
  database: "db_form",
});

router.use(express.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  db.connect((connectionError) => {
    // Stopping case
    if (connectionError) throw connectionError;

    const { name, date, age, idcard, country, city } = req.body;
    const sqlQuery = `INSERT INTO cliente (name, date, age, dni, country, city) VALUES ("${name}","${date}", "${age}", "${idcard}", "${country}", "${city}" );`;
    db.query(sqlQuery, (queryError, res) => {
      // Stopping case
      if (queryError) console.log(queryError);

      console.log("1 record inserted");
    });
  });
});

router.get("/", (req, res) => {
  res.render("index.ejs");
});

// Make the router part of the objects exported by the 'routers/form' module
module.exports = router;
