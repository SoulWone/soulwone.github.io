document.querySelector("#search").oninput = function(){
    let val = this.value.trim();
    let items = document.querySelectorAll(".main-text li");
    if(val != ''){
        items.forEach(function(elem){
            if(elem.innerText.search(val) == -1){
                elem.classList.add("hide");
            }
            else{
                elem.classList.remove("hide");
            }

        });
    }
    else{
        items.forEach(function(elem){
            elem.classList.remove("hide");
        });
    }    
}