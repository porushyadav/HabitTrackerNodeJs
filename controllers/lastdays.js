const HabitTracker = require("../models/schema");

//finding the last days details of the habits
module.exports.lastdays=async function(req,res)
{
    try{


        let habit=await HabitTracker.findById(req.query.id);
        console.log(habit);
        console.log(habit.days.status);
           for(let i=0;i<15;i++)
           {
               console.log(habit.days.status[i]);
           }
        return res.render('7days',{

        title:'habitat',
        habit:habit
        });

    
    }
catch(err)
{
    console.log("error in finding the details of user");
    res.redirect('back');
}



}

//updating the habit if details are changed
module.exports.updateDetails=async function(req,res)
{
    try
    {
    let habit=await HabitTracker.findById(req.query.id);
       console.log(req.query.date)
    let index=habit.days.date.indexOf(req.query.date);
    habit.days.status[index]=req.query.status;
    await HabitTracker.findByIdAndUpdate(req.query.id,{days:habit.days});
    console.log(habit.days.status);
       res.redirect('back');

    }
    catch(err)
    {
        console.log('cannot update the status');
        res.redirect('back');
    }
   
}