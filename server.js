require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

//new route
app.get("/logs/new", (req, res) => {
  res.render("new");
});

//create route
app.post("/logs/", (req, res) => {
    res.send(req.body);
  });

  //view engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());



// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
