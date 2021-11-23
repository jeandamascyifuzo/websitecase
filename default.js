document.write("<h1>wellcome 2 the new world!!</h1>");
 //to compare name and password
function fn1()
{
    var str= document.getElementById("text1").value;
    var str1= document.getElementById("text2").value;
    if(str==str1){
        alert("Name and password matches");
    }
    else{
        alert("Name and password doesn't matches");
    } 
}
//to show w/c sex selected
     function fn2()
     {
        var rd1= Document.getElementById("rd1");
        var rd2= Document.getElementById("rd2");

        if (rd1.checked==true)
            alert("the selected one is:"+rd1.value);  
        else if(rd2.checked==true)
            alert("the selected one is:"+rd2.value);  
        else
            alert("none is selected!!");
     }
     //to display msg showing option selected
     function select(){
         var st1 = document.getElementById("camp");
         alert(st1.options[st1.selectedIndex].value +" is selecte");
     }
     //switching images
     function changeimg()
      {
     document.getElementById("img").src="images (4).png";
     }
     function oldimg()
     {
        document.getElementById("img").src="images (1).png";
     }
 //form validation with red border and invalid msg
 function validate(){
     var username = document.getElementById("user");
     var password = document.getElementById("pass");
     if(username.value.trim()=="")
     {
       alert("username can't left blank");
       username.style.border="solid 2px red";
       document.getElementById("lbl").style.visibility="visible";
       return false;
     }
     else if(password.value.trim()=="")
     {
        alert("password can't left blank");
        password.style.border="solid 2px red";
        document.getElementById("lbl2").style.visibility="visible";
        return false;   
     }
     else if(password.value.trim().length<=7){
        alert("password should not be less than 8 chatacters");
        password.style.border="solid 2px red";
        document.getElementById("lbl2").style.visibility="visible";
        return false; 
     }
 }
 //regular expressions email validation
 function fn6(){
     var mail= document.getElementById("email").value;
    //  +: many more, \.-: u can include . or - in email. {3,5}: char from 3 t0 5
     var regx= /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{3,5})$/;
     if(regx.test(mail))
     {
         alert("valid email");
     }
     else{
         alert("invalid email");
         document.getElementById("lbl3").style.visibility="visible";
     }
 }
 //phone number validation
 function fn7(){
    var phone= document.getElementById("4ne").value;
    //----exclude a to z and start from 0-9. only 10 numbers allowed: start by ^ and end with $
    var regx= /^[^a-z]\d{9}$/;
    if(regx.test(phone))
    {
        alert("valid number");
    }
    else{
        alert("invalid number");
        document.getElementById("lbl4").style.visibility="visible";
    }
}
//timing function
/*
1. setTimeout(): allows u to excute statements ONCE after given time(interval).
2. clearTime(): methode clears a time set with setTimeout() method.
3. setInterval(): allows u to excute statements REPEATEDLY after an interval and also can be used in animation.
4. clearInterval(): method clear a timer set with the setInterval() method.*/
//1 and 2
var id=0;
function printMsg()
{
document.getElementById("msg").innerHTML="THIS IS MSG TO DISPLAY";
}
function start()
{
    id= window.setTimeout(printMsg,5000);
}
function stop()
{
window.clearTimeout(id);
}
//3 and 4
var id=0;
var second=0;
function printMsg2()
{
document.getElementById("msg1").innerHTML=second+"seconds";
second++;
}
function begin()
{
    id= window.setInterval(printMsg2,1000);
}
function end()
{
window.clearInterval(id);
}
var width=150;
var id=0;
function increase()
{
    clearInterval(id);
    id=setInterval(zoomIn,20);
}
function zoomIn()
{
    if(width<300)
    {
        width+=2;
        document.getElementById("img1").style.width=width;
    }
    else
    {
        clearInterval(id);
    }
}
function decrease()
{
    clearInterval(id);
    id=setInterval(zoomOut,20);
}
function zoomOut()
{
    if(width>150)
    {
        width-=2;
        document.getElementById("img1").style.width=width;
    }
    else
    {
        clearInterval(id);
    }
}




