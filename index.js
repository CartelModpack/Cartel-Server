// Modules
const http = require("http");
const express = require("express");
const path = require("path");
const {engine} = require('express-handlebars');

// Config
const conf = require("./config")

// Server
const app = express();
const server = http.createServer(app);

// Handlebars
app.engine('hbs', engine({
    extname: ".hbs",
    defaultLayout: "main"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "./assets/web/views"));

// Routers
app.use("/resource", require("./routes/resources"));
app.use("/download", require("./routes/download"));
app.use("/", require("./routes/web"));

// Launch
server.listen(conf.server.port, _ => {
    console.info(`Cartel Server Live at *:${conf.server.port}`);
})