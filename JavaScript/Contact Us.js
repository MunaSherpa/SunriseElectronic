let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let feedback = document.getElementById("feedback")
//This is a function that shows an autoincrementing alert
function checking(){
    // Declare var
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email");
    var phone = document.getElementById("phone").value;
    var feedback =document.getElementById("feedback").value;

    if(firstname ==="" || lastname ==="" || email ==="" || phone ==="" ||feedback ==="")
    {
        alert("Fill all the fields")
    }
    else
    {
        alert("Thank you for your feedback")
    }
}
