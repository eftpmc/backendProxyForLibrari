const axios = require('axios');
const express = require('express');
const app = express();

const allowedOrigins = ["https://librari-one.vercel.app", "http://localhost:3000"];

app.use((req, res, next) => {
  const origin = req.get('origin'); // Get the origin of the incoming request

  if (allowedOrigins.includes(origin)) {
    next();  // If the origin is allowed, proceed
  } else {
    res.status(403).send("Forbidden: Not Allowed Origin");  // If not, block the request
  }
});

app.get('/api/proxy', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    res.set('Content-Type', response.headers['content-type']);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch resource' });
  }
});

module.exports = app;
