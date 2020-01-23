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

    envoi.addEventListener("click", function(event){
        veriffall(event, firstname, firstnameregex, missfirstname)
        veriffall(event, lastname, lastnameregex, misslastname)
        veriffall(event, phone, phoneregex, missphone)
        veriffall(event, mail02, mail02regex, missmail02)
    })
    function veriffall(event, element, elementregex, misselement){    
            if (element.validity.valueMissing){
                event.preventDefault();
                misselement.textContent = 'Remplis le champ';
                misselement.style.color = 'orange'
            }
            else if (elementregex.test(element.value) == false){
                event.preventDefault();
                misselement.textContent = 'Format incorrect';
                misselement.style.color = 'red'
            }
            else {
                misselement.textContent = 'Ok'
                misselement.style.color = 'green'
                }         
    }    


