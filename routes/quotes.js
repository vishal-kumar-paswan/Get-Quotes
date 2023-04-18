const express = require("express");
const router = express.Router();
const { fetchQuotes } = require("../controllers/quotes");

router.get("/get-quotes", fetchQuotes);

module.exports = router;