const todoList=require('../models/schema');

//exract data from the database
module.exports.home=function(req,res){

    todoList.find({},function(err,todoList)
    {
             if(err)
             {
                 console.log("error found");
                 return;
             }

             return res.render('home',{
                title:"todolist",
                todo_List:todoList
            })


    });



}