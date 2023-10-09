const mongoose=require('mongoose')
const employeeModel=mongoose.model("employees",mongoose.Schema(
    {
      empid:{type:String,required:true},
      empname:String,
      dob:String,
      desig:String,
      joindate:String,
      qualification:String,
      email:String,
      salary:String 
    }
))
module.exports=employeeModel