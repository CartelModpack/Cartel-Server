const {Router} = require("express");
const fs = require("fs");
const path = require("path");
const conf = require("../config");

const router = Router();

router.get("/:version/:type", function (req, res) {
    
    let version = req.params.version;
    if (req.params.version === "latest") {
        version = conf.cartel.latest;
    }

    let file = path.join(__dirname, `../assets/${version}/${req.params.type}`, req.query.p);

    fs.access(file, function (err) {
        if (err) {
            res.status(404);
            res.write(String(err));
            res.end();
        } else {
            res.status(200);
            res.download(file);
        }
    });
});

module.exports = router;