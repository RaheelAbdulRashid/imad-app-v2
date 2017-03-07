//submit password username to login


var submit=document.getElementById('submit_btn');
submit.onclick=function(){
      //making request object
  var request= new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange=function()
  {
  //Make request to the server and send the name
     if(request.readyState===XMLHttpRequest.DONE)
      {
        if(request.status===200)
        {
              alert("Logged in Successfully");
        }else if(request.status===403){
            alert("Username/Password is incorrect");
        }else if(request.status===500){
            alert("Something went wrong on the server");
        }
      }
      
  };
  
  var username=document.getElementById('username').value;
  var password=documemt.getUsernameById('password').value;
  console.log(username);
  cconsole.log(password);


//make a request to counter endpoint
   request.open('POST', 'http://raheelabdulrashid.imad.hasura-app.io/login', true);
   request.setRequestHeader('Content-Type','application/json'); 
   request.send(JSON.stringify({username:username, password:password}));
    
    
    
};