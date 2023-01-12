const express = require("express");
const app = express();

//new route
app.get("/logs/new", (req, res) => {
  res.render("new");
});

//create route
app.post("/logs/", (req, res) => {
    res.send("received");
  });

  //view engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());



// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
