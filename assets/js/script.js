let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("con");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");


const submitForm = () =>{
    event.preventDefault();

    const emailPattern = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

    const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    const passPattern = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

    nameVal = name.value;
    emailVal = email.value;
    phoneVal = phone.value;
    passVal = pass.value;
    cpassVal = cpass.value; 

    // Name Validation
    if(nameVal.trim() == ''){

        document.getElementById("nameErr").innerHTML = "Name Must Be Required";

        name.style.borderColor = "red";
    }else{
     
        if(nameVal.trim().length < 3){

            name.style.borderColor = "red";
            document.getElementById("nameErr").innerHTML = "Name contains at least 3 charaters";
        }else{

            document.getElementById("nameErr").innerHTML = "";
            name.style.borderColor = "white";
        }
    }

    // Email Validation
    if(emailVal.trim() == ''){

        document.getElementById("emailErr").innerHTML = "Email Must Be Required";

        email.style.borderColor = "red";
    }else{

        if(!emailVal.match(emailPattern)){

            email.style.borderColor = "red";
            document.getElementById("emailErr").innerHTML = "Email Must Be In Proper Format";
        }else{

            document.getElementById("emailErr").innerHTML = "";
            email.style.borderColor = "white";
        }
    }

    // Phone Number Validation
    if(phoneVal.trim() == ''){

        document.getElementById("conErr").innerHTML = "Phone Number Must Be Required";

        phone.style.borderColor = "red";
    }else{

        if(!phoneVal.match(phonePattern)){

            phone.style.borderColor = "red";
            document.getElementById("conErr").innerHTML = "Phone Number Must Be Only 10 Digits";
        }else{

            document.getElementById("conErr").innerHTML = "";
            phone.style.borderColor = "white";
        }
    }

    // Password Validation
    if(passVal.trim() == ''){

        document.getElementById("passErr").innerHTML = "Password Must Be Required";

        pass.style.borderColor = "red";
    }else{

        if(!passVal.match(passPattern)){

            pass.style.borderColor = "red";
            document.getElementById("passErr").innerHTML = "Password Contains Must One uppercase character, one number, And at least 8 characters";
        }else{

            document.getElementById("passErr").innerHTML = "";
            pass.style.borderColor = "white";
        }
    }

    // Confirm Password Validation
    if(cpassVal.trim() == ''){

        document.getElementById("cpassErr").innerHTML = "Confirm Password Must Be Required";

        cpass.style.borderColor = "red";
    }else{

        if(cpassVal.length != passVal.length){
            
            cpass.style.borderColor = "red";

            document.getElementById("cpassErr").innerHTML = "Password & Confirm Password Must Be The Same";
        }else{

            document.getElementById("cpassErr").innerHTML = "";
            cpass.style.borderColor = "white";
        }
    }

}


// Name Validation
const nameFun = () => {

    nameVal = name.value;


    if(nameVal.trim() == ''){

        document.getElementById("nameErr").innerHTML = "Name Must Be Required";

        name.style.borderColor = "red";
    }else{
     
        if(nameVal.trim().length < 3){

            name.style.borderColor = "red";
            document.getElementById("nameErr").innerHTML = "Name contains at least 3 charaters";
        }else{

            document.getElementById("nameErr").innerHTML = "";
            name.style.borderColor = "white";
        }
    }
}