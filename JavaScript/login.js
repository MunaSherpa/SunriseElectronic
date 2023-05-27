//Declare function
function validate() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email=="munasherpa31@gmail.com" && password=="muna123")
    {
        alert("login successful");
        window.location.href="../HTML/checkout.html";
    }
    else
    {
        alert("login failed")
    }
}