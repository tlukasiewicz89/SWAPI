const path = require('path');
const express = require('express')

const app = express();
const PORT = 4444;

app.use(express.json());


app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
})

module.exports = app;