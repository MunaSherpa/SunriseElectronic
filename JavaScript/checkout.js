let fullname = document.getElementById("fullname")
let address = document.getElementById("address")
let phonenumber = document.getElementById("phonenumber")

function checking() {
    var fullname = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var phonenumber = document.getElementById("phonenumber").value;

    if (fullname === "" || address === "" || phonenumber === "") {
        alert("Fill all the feilds");
    }

    else {
        alert("Your product will be shipped. Thank you for choosing us.");
    }

}
