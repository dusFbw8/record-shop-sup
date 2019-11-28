var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
var logger = require("morgan");
var low = require("lowdb"); //low
var FileSync = require("lowdb/adapters/FileSync"); //low
var shortid = require("shortid"); //shortid

var indexRouter = require("./routes/index");
var recordRouter = require("./routes/record");
var corsMiddleWare  =  require('./middleware/corsMiddleWare')

var adapter = new FileSync("db/db.json"); //low
var db = low(adapter); //low



db.defaults({
  //low
  record: []
}).write();
db
  .get("record")
  .push({ id: shortid.generate(), name: "Maxim" })
  .write().id; //low

var app = express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(corsMiddleWare)




app.use("/", indexRouter);
app.use("/record", recordRouter);

module.exports = app;
