// Require Dependencies

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const config = require("./config/dev");

const mongoose = require("mongoose");
mongoose.connect(config.DB_URI, { useNewUrlParser: true});




// Route
app.get("/", function(req, res) {
    return res.send({"hello": "world"});
})


// Server Running
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server Running");
})
