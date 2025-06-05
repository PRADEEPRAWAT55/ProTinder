const express = require('express');


const app = express();

app.use("/", (req, res, next) => {
    console.log('Request received at root path');
    // res.send('Hello, World!')
    next();
});


app.get("/hello", (req, res) => {
    res.send('Hello, Hello!')
});

// This route will match both "/hello" and "/helo"
// The regex pattern allows for an optional 'l' before the 'o'
// app.get("/hell?o", (req, res) => {
//     res.send('ello, Hello!')
// });


// This route will match both "/hello" and "/helloo"
// The regex pattern allows for one or more 'l's  before the 'o'
// app.get("/hell+o", (req, res) => {
//     res.send('Hello, Hello!')
// });



app.patch("/hello/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`Request body: ${JSON.stringify(body)}`);
    console.log(`Request received to update Hello with ID: ${id}`);
    res.send('Hello, Hello! updated!', { id });
});

app.post("/hello", (req, res) => {
    const body = req.body;
    res.send('Hello Added! & POST method used ', body);
});

app.delete("/hello/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Hello with ID ${id} deleted!`);
});


app.use('/test', (req, res) => {
    console.log('Request received at /test path');
    res.send('Hello, Test!')
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});