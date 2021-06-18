const express = require("express");
const router = express.Router({ caseSensitive: false });
const { balance } = require("../controller/balance");

router.post("/balance", (req, res) => balance(req, res));

module.exports = router;
