const { createPool} = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Note",
    connectionLimit: 10
})

let sql = `INSERT INTO note (title, text, color, date) VALUE ?;`;



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
        console.log(req.body.data)
        let {values} = req.body

        pool.query(sql,values, (err, result, fields)=> {
            if(err){
                res.send(err);
            }
            // return console.log("")
            res.send('Successful')

        })
    }
}