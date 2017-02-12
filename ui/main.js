var button=document.getElementById('counter');
var counter=0;

button.onclick=function(){

  
    //making request object
  var request= new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange=function()
  {
      if(request.readyState===XMLHttpRequest.DONE)
      {
        if(request.status===200)
        {
            var counter=counter+1;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
      }
  };
  //make a request to counter endpoint
  request.open('GET','http://raheelabdulrashid.imad.hasura-app.io/counter', true);
  request.send(null);



};


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
              //Capture the list of names and render it as a list
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';}
  
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;    
        }
      }
      
  };
  var nameInput=document.getElementById('name');
  var names=nameInput.value;
};


//make a request to counter endpoint
  request.open('GET','http://raheelabdulrashid.imad.hasura-app.io/submit-name + name', true);
  request.send(null);
