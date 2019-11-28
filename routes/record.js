var express = require("express");
var router = express.Router();
var low = require("lowdb"); //low
var FileSync = require("lowdb/adapters/FileSync"); //low
var shortid = require("shortid");
var { createRecord, getRecord } = require("../controllers/recordControllers");

var adapter = new FileSync("db/db.json"); //low
var db = low(adapter); //low

/* GET users listing. */
router.get("/", function(req, res, next) {
  
  res.send("Response from RECORD REQUEST");
});
/*SET USER */
router.get("/:record", createRecord);

module.exports = router;

