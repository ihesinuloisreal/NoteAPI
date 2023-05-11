const { createPool} = require("mysql");

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "Note",
//     connectionLimit: 10
// })




module.exports = {
    
    get: (req, res, next) => {
        
    },
    
    post: (req, res, next) => {
        // const note = req.body

        db.collection("notes")
            .insertOnce({
                title: "hello"
            },(finerr, result) => {
                if (error) {
                    console.log(finerr)
                }else{
                    return result
                }
            }
        )
    }
}