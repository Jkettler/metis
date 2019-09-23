const express = require('express');
const path = require('path');
const cors = require('cors');

let app = module.exports = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function () {
  console.log(`Node server is live and ready for business on port 3000!\n`);
});