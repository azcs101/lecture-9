const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/test', function(req, res) {
    res.send('Test');
});

app.post('/hello/:name', function(req, res) {
    res.send('Goodbye ' + req.params.name);
});

app.get('/hello/:name', function(req, res) {
    res.send('Hello ' + req.params.name);
});

app.listen(3000);