const mongoose=require('mongoose');
//create schema
const employeeSchema=mongoose.Schema({
    empID:{type:Number,required:true},
    empName:{type:String,required:true},
    empDesignation:{type:String,required:true},
    empDepartment:{type:String,required:true},
    empLocation:{type:String,required:true},
    empSalary:{type:Number,required:true},

})
const empData=mongoose.model('employee',employeeSchema);
module.exports=empData; //schema is exported