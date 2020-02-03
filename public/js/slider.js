const wrapper = document.getElementById("wrapper");

let img = ["public/images/hamburger.jpg", "public/images/carrot-juice.jpg", "public/images/tomate-huile.jpg", "public/images/panier-legumes.jpg"];
let i = 0;
let leftarrow = document.getElementById('left-arrow');
let rightarrow = document.getElementById('right-arrow');

wrapper.innerHTML = "<img src = '"+img[i]+"'>";




leftarrow.addEventListener('click', left)
    function left(){
        if (i > 0){
        i--
    }
    else {
        i = img.length-1
    }
    wrapper.innerHTML = "<img src = '"+img[i]+"'>"
    }

rightarrow.addEventListener('click', right)
    function right(){
    if (i >= img.length-1){
        i = 0;
    }
    else {
        i++
    }
    wrapper.innerHTML = "<img src = '"+img[i]+"'>"
    }

    function autorun(){
        setInterval("right(1)", 3000);
    }
