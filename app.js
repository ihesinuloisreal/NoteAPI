const express = require("express");
const cors = require("cors");
const app = express();
const noteRoute = require("./Router/Note")

app.use(cors());
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ihesinuloisreal:yahweh0852@note.7dlh5w0.mongodb.net/?retryWrites=true&w=majority";
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
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.use(("/"),noteRoute)
// app.get("/user",(req, res) => {
// })

port = process.env.PORT || 8080

app.listen(port, console.log("Server started on port "+port))