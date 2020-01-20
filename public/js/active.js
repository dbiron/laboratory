function menuAct(indexActive){

    var menu = document.getElementById("menuactive"); /id de UL/
    var element = menu.getElementsByClassName("nav-item"); /class de LI/
     element[indexActive].className += " active";
}