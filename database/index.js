const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

function add (body,callback) {
  if (!body || !body.name) {
    const error = new Error("Invalid request. 'name' field is required.");
    return callback(error);
  }

  // const { name, description } = body;
  const sql = 'INSERT INTO cows SET ?';
  connection.query(sql, body, function (error, results, fields) {
    callback(error, results);
  });
}

function getAll (callback) {
const sql = 'SELECT * FROM cows;'
 connection.query(sql, function (error, results, fields) {
   callback(error, results);
 });
}

// Don't forget to export your functions!
module.exports = {
getAll,
add
};
