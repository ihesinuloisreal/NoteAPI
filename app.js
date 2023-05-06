const express = require("express")
const cors = require("cors")
const app = express();
const noteRoute = require("./Router/Note")

app.use(cors())

app.use(("/user"),noteRoute)
// app.get("/",(req, res) => {
//     res.send("Hello World");
// })

port = process.env.PORT || 8080

app.listen(port, console.log("Server started on port "+port))