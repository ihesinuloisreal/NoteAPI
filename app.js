const express = require("express");
const cors = require("cors");
const app = express();
const noteRoute = require("./Router/Note")

app.use(cors());

const { createPool} = require("mysql");



app.use(("/"),noteRoute)
app.get("/user",(req, res) => {
    const pool = createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "Note",
        connectionLimit: 10
    })
    
    pool.query('select * from table_name', (err, result, fields)=> {
        if(err){
            res.send(err);
        }
        res.send(result)
    })
})

port = process.env.PORT || 8080

app.listen(port, console.log("Server started on port "+port))