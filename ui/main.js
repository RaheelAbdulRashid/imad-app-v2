var button=document.getElementById('counter');
var counter=0;

button.onclick=function(){
  
  
  //making request object
  var request= new XMLHttpsRequest();
  //capture the response and store it in a variable
  request.onreadystatechange=function()
  {
      if(request.readyState===XMLHttpRequest.DONE)
      {
        if(request,status===200)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
      }
  };
  //make a request to counter endpoint
  request.open('GET','http://raheelabdulrashid.omad.hasura-app-io/counter',true);
  request.send(null);
  
};