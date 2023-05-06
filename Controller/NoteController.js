const { createPool} = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Note",
    connectionLimit: 10
})



module.exports = {
    get: (req, res) => {
        pool.query('select * from note', (err, result, fields)=> {
            if(err){
                return console.log(err);
            }
            // return console.log()
            res.send("name = " +result[1].name)

        })
    }
}