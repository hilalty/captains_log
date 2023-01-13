require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const PORT = 3000;

const Log = require("./models/logs.js");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

//index
app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render("Index", {
      logs: allLogs,
    });
  });
});

//new
app.get("/logs/new", (req, res) => {
    res.render("New");
  });

//delete
app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');
    });
});

//update

//create
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

//edit


//show
app.get("/logs/:id", (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render("Show", {
            log:foundLog
        });
    });
}); 

//view engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/", (req, res) => {
  res.redirect("/logs/");
});

// Tell the app to listen on port 3000
app.listen(PORT, (req, res) => {
  console.log("Listening on port 3000");
});
