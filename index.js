let express = require('express');
let app = express();

global.__root = __dirname;

app.use(require('./server'));

if (process.argv.slice(2, 3).pop() == 'vue') {
    app.use(require('express-http-proxy')(`http://localhost:8079`))
} else {
    app.use(express.static(`${__dirname}/dist`));
    app.use((req, res, next) => {
        res.sendFile(`${__dirname}/dist/index.html`)
    });
}


let server = app.listen(require('os').hostname().indexOf('ubuntu') >= 0 ? 9258 : 8080);
/*let opened = true;
let gracefulClose = (() => {
  if (opened) {
    opened = false;
    server.close();
  }
})
process.on('exit', gracefulClose);
process.on('SIGTERM', gracefulClose);
process.on('SIGINT', gracefulClose);
*/
