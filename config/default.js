

module.exports = {
  db: {
    connection: {
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'hospital',
    }
  }
}

if (require('fs').existsSync(__dirname + '/prod.js')) {
  module.exports = require(__dirname + '/prod.js');
};
