const express = require('express');
const app = require('./api/proxy');  // Import the Express app from api/proxy.js

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
