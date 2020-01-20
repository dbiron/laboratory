function popup(hideorshow) {
    if (hideorshow == 'hide') {
        document.getElementById('cookie').style.display = "none";
    }
    else  if(localStorage.getItem("done") == null) {
        localStorage.setItem("done",1);
        document.getElementById('cookie').removeAttribute('style');
    }
}
function pop () {
    setTimeout(function pop () {
        popup('show');
    }, 0);
}

