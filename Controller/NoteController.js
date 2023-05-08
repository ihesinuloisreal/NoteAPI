const { createPool} = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Note",
    connectionLimit: 10
})



module.exports = {
    get: (req, res, next) => {
        pool.query('select name from note', (err, result, fields)=> {
            if(err){
                res.send(err);
            }
            // return console.log()
            res.send("name = " +result[1].name)

        })
    },
    post: (req, res, next) => {
        pool.query('insert into note (title, text, color, date) value (title, text,color,date)', (err, result, fields)=> {
            if(err){
                res.send(err);
            }
            // return console.log("")
            res.send('Successful')

        })
    }
}