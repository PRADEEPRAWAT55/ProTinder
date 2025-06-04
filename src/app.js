const express = require('express');


const app = express();

app.use("/", (req, res, next) => {
    console.log('Request received at root path');
    // res.send('Hello, World!')
    next();
});


app.get("/hello", (req, res) => {
    console.log('Request received at /hello path');
    res.send('Hello, Hello!')
});


app.use('/test', (req, res) => {
    console.log('Request received at /test path');
    res.send('Hello, Test!')
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});