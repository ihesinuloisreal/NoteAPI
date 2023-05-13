const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const noteRoute = require("./Router/Note")
app.use(cors());
app.use(express.json());
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose")
app.use(bodyParser.urlencoded({extended: false }))
const uri = "mongodb://127.0.0.1:27017/Note";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
async function run() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("You successfully connected to MongoDB!");
    app.use("/",noteRoute)
    // app.get("/",(req, res) => {
    // })

    port = process.env.PORT || 8080

    app.listen(port, console.log("Server started on port "+port))
  } catch(error) {
    // Ensures that the client will close when you finish/error
    console.error('Failed', error)
    // await client.close();
  }
}
run();