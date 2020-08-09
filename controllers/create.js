
const HabitTracker=require('../models/schema');
const Month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; 

//create the habit into the database
module.exports.create=function(req,res)
{

    let date=new Date();
    let days=[]
    let status= ['None','None','None','None','None','None','None','None','None','None','None','None','None','None','None']
    for(let i=0;i<15;i++)
    {
        let d=date.getDate()+","+Month[date.getMonth()]+" "+date.getFullYear();
        date.setDate(date.getDate() - 1);

        days.push(d);

    }
    
    //used to store data in database
    HabitTracker.create({

        description:req.body.description,
        time:req.body.time,
        days:{date:days,status:status}


        

    },function(err,Habit)
    {
           if(err)
           {
               console.log('error in creating a todo');
               return ;
           }
           console.log('*******',Habit);
           return res.redirect('back');
  
    });
}