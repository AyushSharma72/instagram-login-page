function show(){
   document.getElementById("pos").classList.remove("pos");
    document.getElementById("passwordvalidator").style.opacity="1";
   

}
function hide(){
    document.getElementById("pos").classList.add("pos");
    document.getElementById("passwordvalidator").style.opacity="0";
}



function ValidPassword(){

 var pass = document.getElementById("pass");


// lower case
var lowercase = document.getElementById("lowercase");
var mark1 = document.getElementById("mark1");
 var lower = /[a-z]/g;

if(pass.value.match(lower)){

lowercase.classList.add("Valid");
lowercase.classList.remove("inValid");
mark1.classList.remove("fa-solid", "fa-circle-xmark");
mark1.classList.add("fa-solid",'fa-circle-check');
mark1.style.color="#27e70d";
}
else{
   lowercase.classList.remove("Valid");
   lowercase.classList.add("inValid"); 
   mark1.classList.remove("fa-solid",'fa-circle-check');
   mark1.classList.add("fa-solid", "fa-circle-xmark");
   mark1.style.color="red";
}
  
//Uppercase
var  uppercase = document.getElementById("uppercase");
var mark2= document.getElementById("mark2");
var upper = /[A-Z]/g;

if(pass.value.match(upper))
{    
uppercase.classList.add("Valid");
uppercase.classList.remove("inValid");
mark2.classList.remove("fa-solid", "fa-circle-xmark");
mark2.classList.add("fa-solid",'fa-circle-check');
mark2.style.color="#27e70d";
}
else{
   uppercase.classList.remove("Valid");
   uppercase.classList.add("inValid"); 
   mark2.classList.remove("fa-solid",'fa-circle-check');
   mark2.classList.add("fa-solid", "fa-circle-xmark");
   mark2.style.color="red";
}

//numbers
var  number= document.getElementById("number");
var mark3= document.getElementById("mark3");
var num = /[0-9]/g;
if(pass.value.match(num)){

number.classList.add("Valid");
number.classList.remove("inValid");
mark3.classList.remove("fa-solid", "fa-circle-xmark");
mark3.classList.add("fa-solid",'fa-circle-check');
mark3.style.color="#27e70d";
}
else{
   number.classList.remove("Valid");
   number.classList.add("inValid"); 
   mark3.classList.remove("fa-solid",'fa-circle-check');
   mark3.classList.add("fa-solid", "fa-circle-xmark");
   mark3.style.color="red";
}

var  charaters= document.getElementById("charaters");
var mark4= document.getElementById("mark4");
//length
if(pass.value.length >=8){
    charaters.classList.add("Valid");
    charaters.classList.remove("inValid");
    mark4.classList.remove("fa-solid", "fa-circle-xmark");
    mark4.classList.add("fa-solid",'fa-circle-check');
    mark4.style.color="#27e70d";
    }
    else{
       charaters.classList.remove("Valid");
       charaters.classList.add("inValid"); 
       mark4.classList.remove("fa-solid",'fa-circle-check');
       mark4.classList.add("fa-solid", "fa-circle-xmark");
       mark4.style.color="red";

}
}


function Submitform(){

    var lower = /[a-z]/g;
    var upper = /[A-Z]/g;
    var num = /[0-9]/g;
    var pass = document.getElementById("pass");
    var user = document.getElementById("user")
    
    if(user.value.length>0&&pass.value.length >=8 &&pass.value.match(num)&& pass.value.match(upper)&& pass.value.match(lower)){
document.getElementById("Div2").classList.add("hide");
document.getElementById("after").classList.remove("hide");
document.getElementById("after2").classList.add("hide");
}
else{
document.getElementById("Div2").classList.add("hide");
document.getElementById("after").classList.add("hide");
document.getElementById("after2").classList.remove("hide");
}

}


function passww(){
    var x = document.getElementById("pass");
    if(x.getAttribute("type") ==="Password"){
        x.setAttribute("type" ,"text");
    }
    else{
        x.setAttribute("type" ,"Password");
    }
}