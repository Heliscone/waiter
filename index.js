const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.get('/trackingPixel', (req, res) => {
  // Log the request details
  const data = `Time: ${new Date()}, IP: ${req.ip}, Query Params: ${JSON.stringify(req.query)}\n`;
  fs.appendFileSync('access.log', data);

  // Respond with the pixel image
  res.sendFile(__dirname + '/pixel.png');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});