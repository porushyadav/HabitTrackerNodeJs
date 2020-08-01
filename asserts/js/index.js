
const target=document.querySelector('form');
const date=document.getElementsByClassName('date-display');
const randomColor=document.getElementsByClassName('random');
//conveting date to month format
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const color=["Blue ", "Green", "Red", "Orange", "Violet", "Indigo",
 "Yellow ","Aquamarine","DarkOliveGreen","DarkRed","LightBlue"];
for(let i of date)
{
   d=i.innerText;
   i.innerText=months[d.substring(5,7)-1]+" "+d.substring(8)+","+d.substring(0,4);
}
//handle color of button
for(let i of randomColor)
{
    let k=Math.floor(Math.random(color.length)*(months.length-1));
    
    i.style.backgroundColor =color[k];
    i.style.color="white";


}


//handle text-decoration of label when checkbox is checked
document.addEventListener('click',function(e)
{
   if(e.target.className=="checkbox")
      {
        e.target.parentElement.parentElement.classList.toggle("toggle");

      }



});

