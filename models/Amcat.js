var mongoose = require("mongoose");

var Amcat = new mongoose.Schema({
    englishc:{
        type:Number
    },
    logical:{
        type:Number
    },
    quantitative:{
        type:Number
    },
    automata:{
        type:Number
    },
    report:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    dashboard:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    attemp_no:{
        type:Number
    },
    sid:{
        type:String
    },
    sname:{
        type:String
    },
    sdiv:{
        type:String
    },
    sbatch:{
        type:String
    }

},{timestamps: true});

module.exports = mongoose.model("Amcat",Amcat);