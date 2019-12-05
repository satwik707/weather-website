

//fetch is the api that we will be using .This api cannot be written in node backend but since it is client side js we can use it.
//in request fucntion we used to do callback but in fetch we use a then fuction on the return value and then use callback.
//then is a part of a larger api called promises

//fetch is used in client side to gather the json data
// fetch allows us to fetch the data from the url and do something with it



const weatherform=document.querySelector("form");
const location1=document.querySelector("input");
const messageOne=document.querySelector("#message-1");
const messageTwo=document.querySelector("#message-2");

  // textcontent is used to change the content of messageOne


weatherform.addEventListener('submit',(event)=>
{

    event.preventDefault();  //the default behavior is to refresh the page every time the event is fired .in order to prevent this behavior we use prevent default
    messageOne.textContent='Loading your weather ';
    messageTwo.textContent='';      
    fetch('http://localhost:3000/weather?address='+location1.value).then((response)=>{
      
      
           response.json().then((data)=>
           {
               if(data.error)
               {
                   messageOne.textContent=data.error
               }
               else{
               messageOne.textContent=data.location;
               messageTwo.textContent=data.forecast.forecastdata;
               }
                
           })
        
       


})
 
})