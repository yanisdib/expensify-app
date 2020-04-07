const express = require('express');
const path = require('path');
const port = process.env.PORT;
const app = express(); // Create an express app

const buildPath = path.join(__dirname, 'build');
const buildFile = path.join(__dirname, 'build', 'index.html');

app.use(express.static(buildPath)); // Tell Express to use the build directory to serve up all our static assets

app.get('*', (req, res) => res.sendFile(buildFile)); // Send the user back to index.html if what he requested is not to be found 

// Start Express server on port 8080
app.listen(port || 8080, () => {
    console.log('Server is up!')
});