const express = require('express');
const app = express();
const argv = require('yargs').argv;

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  const { method, url } = req;

  console.log(`${timestamp} - IP: ${ip} - Method: ${method} - URL: ${url}`);
  next();
});

app.get('/redir', (req, res) => {
  const { url, status = 301 } = req.query;
  const statusCode = parseInt(status, 10);

  if (statusCode >= 300 && statusCode < 400 && url) {
    res.redirect(statusCode, url);
  } else {
    res.status(400).send('Invalid status code or missing URL.');
  }
});

const PORT = argv.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
