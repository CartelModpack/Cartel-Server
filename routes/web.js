const express = require("express");
const path = require("path");
const conf = require("../config");

const router = express.Router();

router.use("/", express.static(path.join(__dirname, "../assets/web/public")));

router.get("/", function (req, res) {
    res.render("home", {
        server: conf.server
    });
})

module.exports = router;