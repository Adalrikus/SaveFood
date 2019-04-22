var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin";
  password: "admin"
});

function mysqlQuery(sql) {
  con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query(sql, function(){
      if(err) throw err;
      console.log("Database created");
    });
  });
}

function mysqlInsert(db, values) {
  con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO " + db + " (name, address) VALUES ?";
    con.query(sql, [values], function(){
      if(err) throw err;
      console.log("Database created");
    });
  });
}

var sql_db = "CREATE DATABASE SaveFood";
var sql_table_cus = "CREATE TABLE customers (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), order_ID VARCHAR(255), amount INT, price INT)";
var sql_table_res = "CREATE TABLE restaurants (rest_id INT AUTO_INCREMENT PRIMARY KEY, restname VARCHAR(255), password VARCHAR(255), food_ID VARCHAR(255), amount INT, price INT)";

mysqlQuery(sql_db);
mysqlQuery(sql_table_cus);
mysqlQuery(sql_table_res);
