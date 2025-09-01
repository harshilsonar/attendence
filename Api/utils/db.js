const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

const  connect = async ()=>{
    try {
       await mongoose.connect(process.env.mongodb_url)
        console.log(">>>>>>>>>>>>>>>CONNECT<<<<<<<<<<<<<<<")
    } catch (error) {
        console.error(500).json({message:error.message})
    }
}


module.exports = connect