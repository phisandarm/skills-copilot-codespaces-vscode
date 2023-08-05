const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// Create web server

// Path: index.js
const comments = require('./comments.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
// Create Express server

// Path: comments.js
const comments = [
  {
    id: 1,
    body: "some comment"
  },
  {
    id: 2,
    body: "some other comment"
  }
];

module.exports = comments;
// Export comments

// Path: index.js
const comments = require('./comments.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
// Create Express server

// Path: comments.js
const comments = [
  {
    id: 1,
    body: "some comment"
  },
  {
    id: 2,
    body: "some other comment"
  }
];

module.exports = comments;
// Export comments

// Path: index.js
const comments = require('./comments.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
// Create Express server

// Path: comments.js
const comments = [
  {
    id: 1,
    body: "some comment"
  },
  {
    id: 2,
    body: "some other comment"
  }
];

module.exports = comments;
// Export comments

// Path: index.js
const comments = require('./comments.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
// Create Express server

// Path: comments.js
const comments = [
  {
    id: 1,