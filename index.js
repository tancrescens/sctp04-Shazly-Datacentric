const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors());

// add routes here
app.get('/', function (req, res) {
    res.json({
        "message": "hello world"
    });
});

app.get('/edit/:name', (req, res) => {
    let name = req.params.name;
    let id = req.params.id;
    res.send("Hi, " + name + " and your id is: " + id);
})

app.get('/echo', (req, res) => {
    // Get all query parameters
    const queryParams = req.query.firstName;

    // Create a response object
    const response = {
        message: "Here are the query parameters you sent:",
        firstName: queryParams.firstName,
        lastName: queryParams.lastName
    };

    // Send the response as JSON
    res.json(response);
});

app.listen(3000, () => {
    console.log("Server started")
})

