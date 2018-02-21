const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({ error: 'page not found', name: 'todo app v1.0' });
});

app.get('/users', (req, res) => {
  res.send([
    { name: 'weslley', age: 21 },
    { name: 'bruna', age: 18 },
    { name: 'phellipe', age: 17 }
  ]);
});

app.listen(3000);
module.exports.app = app;
