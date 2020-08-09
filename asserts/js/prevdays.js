
const status=document.getElementsByClassName('current-status');
const date=document.getElementsByClassName('date');
const dropdown=document.getElementsByClassName('dropdown1');
const d=document.getElementsByClassName('d');

const filter=document.getElementById('filter').children;
const filterData=document.getElementsByClassName('filter-data');

console.log(filter);
//for doing filter based on data such a complete,Incomplete,none
for(let i=0;i<filter.length;i++)
{
     filter[i].addEventListener('click',function(e)
     {
        d[0].style.display='inline-block';
        d[1].style.display='inline-block';
        d[2].style.display='inline-block';
        d[0].style.width='130';
        d[1].style.width='336';
        d[2].style.width='330';
        
        for(let j=0;j<status.length;j++)
        {
        
            status[j].style.width='336';
            date[j].style.width='130';
            dropdown[j].style.width='330';
            filterData[j].style.width='2000';
            //checking the status of the selected div component
           if(this.getAttribute('id')==="all")
           {

            filterData[j].style.display='block';

           }     
            else if(status[j].getAttribute('data-status')===this.getAttribute('id'))
            {
                filterData[j].style.display='block';
                



            }
            else
            {

                filterData[j].style.display='none';


            }
        

        }

     }) 


}

checkstatus();

//change the color if status changes
function checkstatus()
{
for(i of status)
{

if(i.innerText==="Completed")
{

 i.style.backgroundColor="green";

}
else if(i.innerText==="InCompleted")
{
    i.style.backgroundColor="red";

}
else{
    i.style.backgroundColor="none";

}
}
}

