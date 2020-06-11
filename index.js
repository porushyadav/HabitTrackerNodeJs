const express=require('express');
const port=8000;

const app=express();

app.listen(port,function(err)
{
if(err)
{
    console.log("cannot be connected");
}
console.log("connected to database");

});

app.get('/',function(req,res)
{

    return res.send("<h1>sadasdas</h1>");
})