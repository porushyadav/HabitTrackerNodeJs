const TodoList=require('../models/schema');

//used to delete the single item
module.exports.delete=function(req,res)
{
 var id=req.query.id;
   TodoList.findByIdAndDelete(id,function(err)
   {
    if(err)
    {
        console.log('deleting error');
        return;
    }
    return res.redirect('back');

   })
    
}

//used to delete multiple item
module.exports.multipleDelete=function(req,res)
{
  
  //used when no item is selected
  if(Object.keys(req.query).length==0)
    return res.redirect("back");
    
    //used when only one checkbox is clicked
  if(!Array.isArray(req.query.checkbox))
  {
    TodoList.findByIdAndDelete(req.query.checkbox,function(err)
    {
     if(err)
     {
         console.log('deleting error');
         return;
     }
     
    })
    return res.redirect("back");
  }  

  //to delete multiple checkbox
  for(key of req.query.checkbox)
  {
    console.log(key);
    TodoList.findByIdAndDelete(key,function(err)
    {
     if(err)
     {
         console.log('deleting error');
         return;
     }
     
    })
       
  }
  return res.redirect("back");
}