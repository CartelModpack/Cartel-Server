const fs = require("fs");
const path = require("path");

const DEFAULT_CONF = {
    port: 8080,
    protected_dir: path.join(__dirname, "./protected"),
    cartel_dir: path.join(__dirname, "./Cartel")
}

let final = DEFAULT_CONF;
if (!fs.existsSync(path.join(__dirname, "./conf/config.json"))) {
    if (!fs.existsSync(path.join(__dirname, "./conf"))) fs.mkdirSync(path.join(__dirname, "./conf"));
    fs.writeFileSync(path.join(__dirname, "./conf/config.json"), JSON.stringify(DEFAULT_CONF, null, 2), "utf-8");
} else {
    final = JSON.parse(fs.readFileSync(path.join(__dirname, "./conf/config.json"), "utf-8"));
}

module.exports = final;