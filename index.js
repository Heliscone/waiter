const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.get('/trackClick', (req, res) => {
    // Log the request details
    const data = `Clicked at: ${new Date()}, IP: ${req.ip}, User Agent: ${req.headers['user-agent']}\n`;
    fs.appendFileSync('clicks.log', data);
  
    // Redirect to an actual image or URL
    res.redirect('https://www.google.com/');
  });  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});