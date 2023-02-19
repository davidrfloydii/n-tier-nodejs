"use strict";
const express = require("express");
const app = express();
const port = 8090;

app.get("/api",(req,res) => {
    res.status(200).send({
        apiVersion: "1.0.0",
        responseText: "Hello"
    });
});

app.listen(port,() => {
    console.log(`Listening on ${port}`);
});