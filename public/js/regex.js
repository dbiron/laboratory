let firstname = document.getElementById ('firstname');
let firstnameregex = /^([A-ZÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;
let missfirstname = document.getElementById ('missfirstname');

let lastname = document.getElementById ('lastname');
let lastnameregex = /^([A-ZÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;
let misslastname = document.getElementById ('misslastname');

let phone = document.getElementById ('phone');
let phoneregex = /^((\+)33|0)[1-9](\d{2}){4}$/;
let missphone = document.getElementById ('missphone');

let mail02 = document.getElementById ('mail02');
let mail02regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
let missmail02 = document.getElementById ('missmail02');


let envoi = document.getElementById ('envoi');

    envoi.addEventListener("click", veriffirstname)
        function veriffirstname(event){
            if (firstname.validity.valueMissing){
                event.preventDefault();
                missfirstname.textContent = 'Remplis le champ';
                missfirstname.style.color = 'orange'
            }
            else if (firstnameregex.test(firstname.value) == false){
                event.preventDefault();
                missfirstname.textContent = 'Format incorrect';
                missfirstname.style.color = 'red'
            }
            else {
                missfirstname.textContent = 'Ok'
                missfirstname.style.color = 'green'
                }         
        }
    envoi.addEventListener("click", veriflastname)
        function veriflastname(event){
            if (lastname.validity.valueMissing){
                event.preventDefault();
                misslastname.textContent = 'Remplis le champ';
                misslastname.style.color = 'orange'
            }
            else if (lastnameregex.test(lastname.value) == false){
                event.preventDefault();
                misslastname.textContent = 'Format incorrect';
                misslastname.style.color = 'red'               
            }
            else {
                misslastname.textContent = 'Ok';
                misslastname.style.color = 'green'
            }           
        }
    envoi.addEventListener("click", verifphone)
        function verifphone(event){
            if (phone.validity.valueMissing){
                event.preventDefault();
                missphone.textContent = 'Remplis le champ';
                missphone.style.color = 'orange'
            }
            else if (phoneregex.test(phone.value) == false){
                event.preventDefault();
                missphone.textContent = 'Format incorrect';
                missphone.style.color = 'red'               
            }
            else {
                missphone.textContent = 'Ok';
                missphone.style.color = 'green'
            }           
        }
    envoi.addEventListener("click", verifmail02)
        function verifmail02(event){
            if (mail02.validity.valueMissing){
                event.preventDefault();
                missmail02.textContent = 'Remplis le champ';
                missmail02.style.color = 'orange'
            }
            else if (mail02regex.test(mail02.value) == false){
                event.preventDefault();
                missmail02.textContent = 'Format incorrect';
                missmail02.style.color = 'red'               
            }
            else {
                missmail02.textContent = 'Ok';
                missmail02.style.color = 'green'
            }           
        }


