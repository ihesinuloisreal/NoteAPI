// const { createPool} = require("mysql");

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "Note",
//     connectionLimit: 10
// })

// pool.query('select * from table_name', (err, result, fields)=> {
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result)
// })

const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect("mongodb://127.0.0.1:27017")
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection

}