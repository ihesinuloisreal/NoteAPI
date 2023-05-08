const express = require("express");
const cors = require("cors");
const app = express();
const noteRoute = require("./Router/Note")

app.use(cors());




app.use(("/"),noteRoute)
// app.get("/user",(req, res) => {
// })

port = process.env.PORT || 8080

app.listen(port, console.log("Server started on port "+port))