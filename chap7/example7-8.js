var mysql = require('mysql'),
    crypto = require('crypto');

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'ruslan',
   password: 'Mysqlpass!2'
  });

connection.connect();

connection.query('USE nodedatabase');

var username = process.argv[2];
var password = process.argv[3];

var salt = Math.round((Date.now() * Math.random())) + '';

var hashpassword = crypto.createHash('sha512')
                   .update(salt + password, 'utf8')
                   .digest('hex');
// create user record
connection.query('CREATE TABLE IF NOT EXISTS user (user_id INT, username varchar(255), passwordhash varchar(255), salt varchar(255))');
connection.query('INSERT INTO user ' +
   'SET username = ?, passwordhash = ?, salt = ?',
   [username, hashpassword, salt], function(err, result) {
      if (err) console.error(err);
      connection.end();
});

