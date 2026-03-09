const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('<h1>Hello World - Version 1.0</h1>');
});

app.get('/health', (req, res) => {
 res.json({ status: 'ok' });
});

app.listen(3000, () => {
 console.log('App started on port 3000');
});