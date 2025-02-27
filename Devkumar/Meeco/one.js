//Form

let fnameError = document.getElementById('fname-error')
let lnameError = document.getElementById('lname-error')
let emailError = document.getElementById('email-error')
let phoneError = document.getElementById('phone-error')
let messageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')

function validateName(){
    let fname = document.getElementById('contact-fname').value;

    if(fname.length == 0){
        fnameError.innerHTML = 'required';
        return false;
    }
    if(!fname.match(/^[A-Za-z]*$/)){
        fnameError.innerHTML = 'enter valid name';
        return false;
    }
    fnameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateName1(){
    let lname = document.getElementById('contact-lname').value;

    if(lname.length == 0){
        lnameError.innerHTML = 'required';
        return false;
    }
    if(!lname.match(/^[A-Za-z]*$/)){
        lnameError.innerHTML = 'enter valid name';
        return false;
    }
    lnameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Write valid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'enter 10 digit number'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('contact-message').value;
    let required = 20;
    let left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters requires';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateName1() || !validateEmail() || !validatePhone() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Fix error to Submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}