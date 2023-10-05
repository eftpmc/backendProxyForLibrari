const axios = require('axios');
const express = require('express');
const app = express();

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
