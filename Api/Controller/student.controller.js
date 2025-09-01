const su = require("../model/student.model")

const Studentcontroller = {
     test: (req, res) => {
    res.status(201).json({ message: "Test routes Working" });
  },
    create: async(req, res)=>{
        const {name, rollno} =req.body
        if(!name || !rollno )
        {
            return   res.status(404).json("fill up all fields")
        }

        try {
            await su.create({...req.body})
            res.status(201).json("student data  is created")
            
        } catch (error) {
            res.status(404).json({message:error.message||"student data is not create due to some err"})
        }
  },
  getalldata :async(req,res)=>{
    
        try {
            const getalldata=await su.find()
            res.status(201).json("student data  is created",getalldata)
            
        } catch (error) {
            res.status(404).json({message:error.message||"student data is not create due to some err"})
        }
    },
    getbyid: async(req,res)=>{
    const {id} = req.params
   const getalldata = await su.find({id})
   if(!getalldata)
   {
    res.status(200).json({message:"student is not found"})
   }
   try {
    const student = await su.findById({id})
  res.status(200).json({message:"student is found",student})
   } catch (error) {
        res.status(500).json({message:"student not found by id"})
   }
    },
    delete:async(req,res)=>{
    const {id} = req.params
   const getalldata = await su.find({id})
   if(!getalldata)
   {
    res.status(200).json({message:"student not found"})
   }
   try {
    const student = await su.findById(id)
    res.status(200).json({message:"student data is delete",student})
   } catch (error) {
        res.status(500).json({message:"student data  is not delete"})
   }
  },
  update:async(req,res)=>{
    const {id} = req.params

    try {
        const student = await su.findByIdAndUpdate(id,{new:true})
        student.attendence = !student.attendence
           student.save()
    } catch (error) {
        res.status(500).json({message:"student data  is not updated"})
    }
  },
  filteration:async(req,res)=>{
    try{
    const {attendence} = req.body

    let fil = {}
    if(attendence!==undefined){
        fil.attendence =(attendence == true || attendence=="true")
    }
    let student = await su.find(fil)
     res.status(200).json(student)
  }catch(error){
   res.status(500).json({message:"error"})
  }
  }
}

module.exports = Studentcontroller