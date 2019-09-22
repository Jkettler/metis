const express = require('express');
const path = require('path');
var cors = require('cors');

let app = module.exports = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/api', function(req, res) {
//   res.redirect('http://localhost:3001/api/v1/crops');
// });

app.listen(3000, function () {
  console.log(`Node server is live and ready for business on port 3000!\n`);
});