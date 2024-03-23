const express = require("express");
const conf = require("../config");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const variants = ["lite", "normal", "plus"];

if (conf.cartel.direct) {
    variants.forEach(varient => router.use(`/latest/${varient}`, express.static(path.join(conf.cartel.pack_dir, varient))));

} else {
    fs.readdirSync(conf.cartel.pack_dir).filter(function (file) {
        return fs.statSync(conf.cartel.pack_dir+'/'+file).isDirectory();
    }).forEach(version => {
        let raw_version = version.slice(7);
        variants.forEach(varient => router.use(`/${raw_version}/${varient}`, express.static(path.join(conf.cartel.pack_dir, version, varient))));
    });

}

module.exports = router;