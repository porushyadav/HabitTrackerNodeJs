
const TodoList=require('../models/schema');

module.exports.create=function(req,res)
{
    //used to store data in database
    TodoList.create({

        description:req.body.description,
        category:req.body.category,
        duedate:req.body.duedate,
        check:false


    },function(err,Todo)
    {
           if(err)
           {
               console.log('error in creating a todo');
               return ;
           }
           console.log('*******',Todo);
           return res.redirect('back');
  
    });
}