var mongoose = require("mongoose");

var Notices = new mongoose.Schema({
    notice_by:{
        type:String,
        required: true
    }
    ,
    heading:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    }
    ,
    forw:{
        type:String,
        required: true
    },
    important:{
        type: Boolean,
    },
    teacher_id:{
        type:String,
        required: true
    },
    comments:{
        student_name:{
            type:String
        },
        comment:{
            type:String
        },
        reply:{
            type: String
        }
    }
},
{timestamps: true})

module.exports = mongoose.model("Notices",Notices)