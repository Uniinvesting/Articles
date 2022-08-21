const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("Here");
    res.download("app.js");
});

app.listen(4000, () => {
    console.log("listening to port 4000");
})