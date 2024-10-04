let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("con");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");


const submitForm = () =>{
    event.preventDefault();

    nameFun();
    emailFun();
    phoneFun();
    passFun();
    cpassFun();

    const nameErr = document.getElementById("nameErr").innerHTML;
    const emailErr = document.getElementById("emailErr").innerHTML;
    const conErr = document.getElementById("conErr").innerHTML;
    const passErr = document.getElementById("passErr").innerHTML;
    const cpassErr = document.getElementById("cpassErr").innerHTML;
    
    if(nameErr == '' && emailErr == '' && conErr == '' && passErr == '' && cpassErr == ''){

        alert("Form Submitted Succesfully..");
    }else{

        alert("Please Fill Correct Information In Form..!!!");
    }    
}


// Name Validation
const nameFun = () => {

    nameVal = name.value;


    if(nameVal.trim() == ''){

        document.getElementById("nameErr").innerHTML = "Name Must Be Required";

        name.style.borderColor = "red";
        document.querySelector(".namecolor").style.color = "red";
    }else{
     
        if(nameVal.trim().length < 3){

            name.style.borderColor = "red";
            document.getElementById("nameErr").innerHTML = "Name contains at least 3 charaters";
            document.querySelector(".namecolor").style.color = "red";
        }else{

            document.getElementById("nameErr").innerHTML = "";
            name.style.borderColor = "white";
            document.querySelector(".namecolor").style.color = "white";
        }
    }
}

// Email Validation
const emailFun = () => {

    const emailPattern = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

    emailVal = email.value;

    if(emailVal.trim() == ''){

        document.getElementById("emailErr").innerHTML = "Email Must Be Required";

        email.style.borderColor = "red";
        document.querySelector(".emailcolor").style.color = "red";
    }else{

        if(!emailVal.match(emailPattern)){

            email.style.borderColor = "red";
            document.getElementById("emailErr").innerHTML = "Email Must Be In Proper Format";
            document.querySelector(".emailcolor").style.color = "red";
        }else{

            document.getElementById("emailErr").innerHTML = "";
            email.style.borderColor = "white";
            document.querySelector(".emailcolor").style.color = "white";
        }
    }
}

// Phone Number Validation
const phoneFun = () => {

    const phonePattern = /^\d{10}$/;
    phoneVal = phone.value;

    if(phoneVal.trim() == ''){

        document.getElementById("conErr").innerHTML = "Phone Number Must Be Required";

        phone.style.borderColor = "red";
        document.querySelector(".concolor").style.color = "red";
    }else{

        if(!phoneVal.match(phonePattern)){

            phone.style.borderColor = "red";
            document.getElementById("conErr").innerHTML = "Phone Number Must Be Only 10 Digits";
            document.querySelector(".concolor").style.color = "red";
        }else{

            document.getElementById("conErr").innerHTML = "";
            phone.style.borderColor = "white";
            document.querySelector(".concolor").style.color = "white";
        }
    }
}

// Password Validation
const passFun = () => {

    const passPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
    passVal = pass.value; 

    if(passVal.trim() == ''){

        document.getElementById("passErr").innerHTML = "Password Must Be Required";

        pass.style.borderColor = "red";
        document.querySelector(".passcolor").style.color = "red";
    }else{

        if(!passVal.match(passPattern)){

            pass.style.borderColor = "red";
            document.getElementById("passErr").innerHTML = "Password Contains Must One uppercase character, one number, One Non-Alpha numeric Character And at least 8 characters";
            document.querySelector(".passcolor").style.color = "red";
        }else{

            document.getElementById("passErr").innerHTML = "";
            pass.style.borderColor = "white";
            document.querySelector(".passcolor").style.color = "white";
        }
    }

    
    
}

// Confirm Password Validation
const cpassFun = () => {

    cpassVal = cpass.value;

    if(cpassVal.trim() == ''){

        document.getElementById("cpassErr").innerHTML = "Confirm Password Must Be Required";

        cpass.style.borderColor = "red";
        document.querySelector(".cpasscolor").style.color = "red";
    }else{

        if(cpassVal.length != passVal.length){
            
            cpass.style.borderColor = "red";

            document.getElementById("cpassErr").innerHTML = "Password & Confirm Password Must Be The Same";
            document.querySelector(".cpasscolor").style.color = "red";
        }else{

            document.getElementById("cpassErr").innerHTML = "";
            cpass.style.borderColor = "white";
            document.querySelector(".cpasscolor").style.color = "white";
        }
    }
}