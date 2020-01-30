let street = document.getElementById("street");
let result = document.getElementById("result");

street.addEventListener("keyup", function () {console.log('hello')
    let code = street.value;
    result.innerHTML = "";
    fetch("https://api-adresse.data.gouv.fr/search/?q=" + code)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json.features[0].properties.label);

            json.features.forEach(function (feature) {
                let label = document.createElement("div");
                label.innerText = feature.properties.label;
                result.appendChild(label)
                
                label.addEventListener("click", function() {
                street.value = label.textContent;
                closeAllLists()
            });
            })
})
})
         function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("complete");
    $(x).empty();
}        

