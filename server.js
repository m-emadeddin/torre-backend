const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

// Serve static files from the dist directory
app.use(express.static(__dirname + '/dist'));

// Redirect all requests to the index.html file
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('Server started on port 3000');
});