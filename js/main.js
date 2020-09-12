function ValidateForm(){  
    var first_name=document.getElementById("First-Name"); 
    var last_name=document.getElementById("Last-Name");
    var emailID=document.getElementById("Email-Address");
    var password=document.getElementById("Password");  
    var confirm_password=document.getElementById("Confirm-Password");
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var neutralColor = "ffffff";

    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (first_name.value==null || first_name.value==""){  
        first_name.style.backgroundColor = badColor;
        first_name_result.style.color = badColor;
        document.getElementById("first_name_result").innerHTML="First Name cannot be blank"; 
        return false;  
    }
    else{
        first_name.style.backgroundColor = goodColor;
    }
    if (last_name.value==null || last_name.value==""){
        last_name.style.backgroundColor = badColor;
        last_name_result.style.color = badColor;
        document.getElementById("last_name_result").innerHTML="Last Name cannot be blank";
        return false;
    }
    else{
        last_name.style.backgroundColor = goodColor;
    }
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        document.getElementById("email_result").innerHTML="Please enter correct email ID";
        emailID.style.backgroundColor = badColor;
        email_result.style.color = badColor;
        return false;
    }    
    if(password.value.length < 6){
        document.getElementById("password_result").innerHTML= "Enter a password of at least 6 characters";
        setBGColor('confirm_password', neutralColor);
        if (password.value.length === 0) {
            setBGColor('password', neutralColor);
        } else {
            setBGColor('password', badColor);
        }
    } else if (confirm_password !== password) {
        setBGColor('password', goodColor);
        if (confirm_password.value.length === 0) {
          setBGColor('confirm_password', neutralColor);
        } else {
          setBGColor('confirm_password', badColor);
        }
    } else {
        document.getElementById("confirm_password_result").innerHTML = "Passwords match";
        setBGColor('password', goodColor);
        setBGColor('confirm_password', goodColor);
      }
    
    function setBGColor(id, value) {
      getElementbyId(id).style.backgroundColor = value;
    }
    
           
}