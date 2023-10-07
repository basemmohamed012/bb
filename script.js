function formvalidate(){
    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var error = document.getElementById("Error");
    var text = "";

    if (username.length < 5){
       text = "Please Enter a Valid Username";
       error.innerHTML = text;
       return false;
    }
    else if (email.indexOf("@") === -1 || email.length < 10){
       text = "Please Enter a Valid Email";
       error.innerHTML = text;
       return false;
    }
    else if (isNaN(phone) || phone.length !== 11){
        text = "Please Enter a Valid Phone";
        error.innerHTML = text;
        return false;
    }
    else {
        alert("Done");
        return true;
    }
}
