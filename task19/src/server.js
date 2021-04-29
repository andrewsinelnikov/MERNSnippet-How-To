require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use("/api/products", require("./routes/api/products"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));