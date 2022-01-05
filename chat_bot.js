const express = require('express');
const fs = require("fs");
const contents = fs.readFileSync("Hi.json");
const jsonContent = JSON.parse(contents);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(jsonContent);
});

app.post("/", (req, res) => {
    res.send(jsonContent);
    console.log(req.body.newLogin);
    console.log(req.body.newPassword);
    console.log(req.body.id);
});

app.listen(80);