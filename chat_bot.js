const express = require('express');
const fs = require("fs");
const contents = fs.readFileSync("Hi.json");
const jsonContent = JSON.parse(contents);
let fetch = require('node-fetch');

const app = express();

app.get("/", (req, res) => {
    res.send(jsonContent);
});

fetch('https://4bc4-188-163-104-191.eu.ngrok.io')
        .then(res => res.json())
        .then(json => console.log(json.logins_and_passwords.login));

app.listen(8080);