const express = require("express");
const router = express.Router();
const { fetchQuotes } = require("../controllers/quotes");

router.get("/", fetchQuotes);

module.exports = router;