const Studentcontroller = require("../Controller/student.controller")
const express = require("express")

const studentrouter = express.Router()

studentrouter.get("/test",Studentcontroller.test)
studentrouter.post("/createdata",Studentcontroller.create)
studentrouter.delete("/deleterouter/:id",Studentcontroller.delete)
studentrouter.get("/getbyid/:id",Studentcontroller.getbyid)
studentrouter.patch("/updateid/:id",Studentcontroller.update)
studentrouter.get("filters",Studentcontroller.filteration)
module.exports = studentrouter