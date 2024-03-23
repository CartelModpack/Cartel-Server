const fs = require("fs");
const path = require("path");

const DEFAULT_CONF = {
    server: {
        port: 8080,
        name: "Server Name",
        url: "Server URL (https://example.com)"
    },
    cartel: {
        latest: "1.0.0",
        assets_dir: path.join(__dirname, "./assets"),
        pack_dir: path.join(__dirname, "./cartel"),
        direct: false
    }
}

let final = DEFAULT_CONF;
if (!fs.existsSync(path.join(__dirname, "./conf/config.json"))) {
    if (!fs.existsSync(path.join(__dirname, "./conf"))) fs.mkdirSync(path.join(__dirname, "./conf"));
    fs.writeFileSync(path.join(__dirname, "./conf/config.json"), JSON.stringify(DEFAULT_CONF, null, 2), "utf-8");
} else {
    final = JSON.parse(fs.readFileSync(path.join(__dirname, "./conf/config.json"), "utf-8"));
}

module.exports = final;