var mongoose = require("mongoose");

var TeacherSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  collegeId: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  department: {
    type: String,
    default: "",
  },
  mobile:{
    type:String,
  }
},
{timestamps: true});

module.exports = mongoose.model("Teachers",TeacherSchema);