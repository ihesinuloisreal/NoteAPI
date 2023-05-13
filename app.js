const express = require("express");
const cors = require("cors");
const app = express();
const noteRoute = require("./Router/Note")
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("Note").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.use("/",noteRoute)
    // app.get("/",(req, res) => {
    // })

    port = process.env.PORT || 8080

    app.listen(port, console.log("Server started on port "+port))
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);