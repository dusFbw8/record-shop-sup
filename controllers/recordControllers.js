const low = require("lowdb"); //low
const FileSync = require("lowdb/adapters/FileSync"); //low
const shortid = require("shortid");

const adapter = new FileSync("db/db.json"); //low
const db = low(adapter); //low
exports.createRecord = (req, res, next) => {

  db.get("record") 
    .push({ 
      id: shortid.generate(),
      name: req.params.name })
    .write();

  res.json({ 
    records: req.params.name 
  });
};
exports.getRecord = (req, res, next) => {
    db.get('record').find().value()
    
  
};
