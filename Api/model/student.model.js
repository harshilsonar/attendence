const mongoose = require("mongoose")

const studentlist = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    attendence:{
        type:Boolean,
        default:true
    },
    createdat:{
        type:String,
        default:()=>{
            const present = new Date()
            return `${present.getDate()} - ${present.getMonth()+1} - ${present.getYear()}`
        }
    },
    status:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true
})

const su = mongoose.model("attendence",studentlist)

module.exports = su