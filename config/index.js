let config = {}
const NODE_ENV = process.env.NODE_ENV || "";
switch(NODE_ENV){
  case "developmemt":
    config = require("./developmemt.json");
  case "test":
    config = require("./test.json");
  case "production":
    config = require("./production.json");
  default:
    config = require("./production.json");
}
module.exports= config;