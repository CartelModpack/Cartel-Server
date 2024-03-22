// Modules
const http = require("http");
const express = require("express");

// Config
const conf = require("./config")

// Server
const app = express();
const server = http.createServer(app);

// Express Routes
app.use("/protected", express.static(conf.private_dir));

// Launch
server.listen(conf.port, _ => {
    console.info(`Cartel Server Live at *:${conf.port}`);
})