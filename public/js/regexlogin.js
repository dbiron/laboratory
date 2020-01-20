let mail = document.getElementById ('mail');
let mailregex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
let missmail = document.getElementById ('missmail');

let psw = document.getElementById ('psw');
let pswregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})/;
let misspsw = document.getElementById ('misspsw');

send.addEventListener("click", verifmail)
function verifmail(event){
    if (mail.validity.valueMissing){
        event.preventDefault();
        missmail.textContent = 'Remplis le champ';
        missmail.style.color = 'orange'
    }
    else if (mailregex.test(mail.value) == false){
        event.preventDefault();
        missmail.textContent = 'Format incorrect';
        missmail.style.color = 'red'               
    }
    else {
        missmail.textContent = 'Ok';
        missmail.style.color = 'green'
    }           
}
send.addEventListener("click", verifpsw)
function verifpsw(event){
    if (psw.validity.valueMissing){
        event.preventDefault();
        misspsw.textContent = 'Remplis le champ';
        misspsw.style.color = 'orange'
    }
    else if (pswregex.test(psw.value) == false){
        event.preventDefault();
        misspsw.textContent = 'Format incorrect';
        misspsw.style.color = 'red'               
    }
    else {}           
}
