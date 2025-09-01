const express = require("express");
const connect = require("../Api/utils/db");
const dotenv = require("dotenv")

dotenv.config()
app = express()
const cors = require("cors");
app.use(express.json())
const studentrouter = require("./router/student.router");

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use("/api/studentrouter/",studentrouter)


app.listen(process.env.PORT,()=>{
    try {
        connect();
        console.log("server is running")
    } catch (error) {
        console.error("internal error",error)
    }
})