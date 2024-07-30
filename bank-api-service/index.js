
const express = require("express");

const app = express();
const port = 3000;

// process.on('uncaughtException', function (err) {
//     console.log(err);
//   });

app.get("/", function (req, res) {
    res.send("Connection successfull")
});

app.listen(port, function () {
    console.log("Bank api started started and is running on port 3000")
});
