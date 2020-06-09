const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
//ROUTERS
const riotRouter = require("./routes/riot.router.js");
// App Set //
const PORT = process.env.PORT || 8000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- ROUTES ---------- **/
app.use("/api/riot", riotRouter);

// Serve static files
app.use(express.static('build'));


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log("Listening on port: ", PORT);
})
