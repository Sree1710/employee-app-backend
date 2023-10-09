const Express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const mongoose=require('mongoose')
const employeeModel = require('./employeeModel')

var app=Express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(Cors())

mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/EmployeeDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/adde",async(request,response)=>{
    let data=request.body
    const employee=new employeeModel(data)
    let result=await employee.save()
    if (result.empid!="") {
      response.json({"status":"success"})
    } else {
      response.json({"status":"error"})  
    }
})

app.get("/viewe",async(request,response)=>{
    let result=await employeeModel.find()
    response.json(result)
})

app.listen(3001,()=>{
    console.log("Server is running")
})