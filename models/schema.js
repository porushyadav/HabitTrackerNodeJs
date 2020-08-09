const mongoose=require('mongoose');

const Schema= new mongoose.Schema({
   description:{
       type:String,
       require:true
   },
   time:{
       type:String,
       required:true
   },
   days:{}
 


});

const HabitTracker=mongoose.model('HabitTracker',Schema);
module.exports=HabitTracker;