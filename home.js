alert("Welcome To My Protfolio");


var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){
    if(myForm.name.value == ""){
        message.innerHTML = "please enter name";
        return false;
    }else{
        message.innerHTML = "";
        return true;
    }
}