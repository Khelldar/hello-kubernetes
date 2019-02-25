import * as express from 'express';
const uuid = require('uuid/v4');
var app = express();

const port = process.env.PORT || 3000;
const id = uuid();

app.get('/', function(req, res) {
  res.send(`Hello World! This is ${id}`);
});

app.listen(port, function() {
  console.log(`hello-world-api listening on port ${port}...`);
});
