const mongoose = require("mongoose")
//const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema

const todoSchema = new mongoose.Schema({
      Todo:{
            type:String,
            required: true,
      },
});

module.exports = new mongoose.model("todo",todoSchema)