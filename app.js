const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const router = require('./router/routes.js');
var bodyParser = require('koa-bodyparser');

const db = require('./config/db.js');

var notFound = require('./Controller/notFound.js');

app.use(serve(__dirname + '/public'));
app.use(bodyParser());
app.use(router.routes());

app.use(notFound);



db.connect(function(err) {
  if (err) console.error('error connecting: ' + err.stack);
  app.listen(3000);
});



