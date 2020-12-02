const config = require('config');
const chalk = require('chalk');
var mysql = require('mysql');
const dbConfig = config.get('db.connection');
var connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database
});

process.stdout.write(chalk.yellow('OPENING DATABASE CONNECTION... '))
let opened = false;
connection.connect(function(err) {
  if (err) {
    console.log(chalk.red('DATABASE ERROR'))
    throw err;
    return;
  }
  console.log(chalk.green('CONNECTED'))
  opened = true;
});

/*let gracefulClose = () => {
  if (opened) {
    opened = false;
    console.log('');
    process.stdout.write(chalk.yellow('CLOSING DATABASE CONNECTION... '))
    connection.end(function(err) {
      if (err) {
        console.error(err);
        //process.exit(1);
      }
      console.log(chalk.green('SUCCESS'))
      //process.exit(0);
    });
  }
};
process.on('exit', gracefulClose);
process.on('SIGTERM', gracefulClose);
process.on('SIGINT', gracefulClose);
*/

let db = {
  connection,
  query(...args) {
    return new Promise((resolve, reject) => {
      connection.query(...args, function(err, results, fields) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ results, fields, });
      })
    });
  },
};

global.db = db;

/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/
