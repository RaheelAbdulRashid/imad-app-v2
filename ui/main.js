console.log('Loaded!');
var element = document.getElementById("main_text");
element.innerHTML="New text";

var marginLeft=0;
function moveRight() {
    marginLeft= marginLeft+1;
    img.style.marginLeft= marginLeft+"px";
    
}
var img=document.getElementById("madi");
img.onclick = function(){
    var interval=setInterval(moveRight,50);
};