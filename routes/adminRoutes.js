const express = require("express");
const router = express.Router();

router.route("/admin").get((req, res) => {
    res.send("Admin API stuff");
});

module.exports = router;
