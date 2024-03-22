// Modules
const http = require("http");
const express = require("express");
const path = require("path");

// Config
const conf = require("./config")

// Server
const app = express();
const server = http.createServer(app);

// Express Routes
app.use("/latest/lite", express.static(path.join(__dirname, "./Cartel/lite")));
app.use("/latest/normal", express.static(path.join(__dirname, "./Cartel/normal")));
app.use("/latest/plus", express.static(path.join(__dirname, "./Cartel/plus")));
app.use("/protected", express.static(conf.private_dir));

// Launch
server.listen(conf.port, _ => {
    console.info(`Cartel Server Live at *:${conf.port}`);
})