const mongoose=require('mongoose');

const Schema= new mongoose.Schema({
   description:{
       type:String,
       require:true
   },
   category:{
       type:String,
       require:true
   },
   duedate:{
       type:String,
       required:true
   },
   check:{
       type:Boolean,
       required:true

   }



});

const TodoList=mongoose.model('TodoList',Schema);
module.exports=TodoList;