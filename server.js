var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})

app.get("/api/hello", (req, res) => {
  res.json({greeting: "hello API"})
});

app.get("/api/timestamp/:date_string", (req, res) => {
  var date_string = new Date(req.params.date_string);

  if (date_string == null)
    res.json({unix: null, utc: "Invalid Date"});
  else
    res.json({unix: date_string.getTime(), utc: date_string.toUTCString()});
})

var listener = app.listen(8080, () => {
  console.log("Your app is listening on por " + listener.address().port);
});