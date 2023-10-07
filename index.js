// Create a express app to serve the frontend
'use strict';
const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static('build'));
app.use('/api', createProxyMiddleware({ target: process.env.API_ENDPOINT || 'http://localhost:5000', changeOrigin: process.env.CHANGE_ORIGIN || false}));

app.listen(port, () => console.log(`Frontend listening on port ${port}!`));