const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req, res) => {
  res.status(200).sendFile(__dirname + '/index.html');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});