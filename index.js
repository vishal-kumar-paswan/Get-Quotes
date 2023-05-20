const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000 || process.env.PORT;

// Importing routes
const quoteRoutes = require("./routes/quotes");

// Using cors and body parser
app.use(bodyParser.json());
app.use(cors());
app.use(quoteRoutes);

app.listen(PORT, () => console.log(`app is live on port ${PORT}`));