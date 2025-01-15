const menu = document.querySelector('#main-pannel');
const button = document.querySelector('#menuButton');
button.onclick = function(){
    if(menu.style.display === "none"){
        button.innerHTML= '&#x2716;';
        menu.style.cssText = 'background-color:white; opacity:0.95; position: absolute; top: 3rem; width:100%; display: flex; flex-direction: column;'
        menu.style.display = "flex";
        menu.style.flexDirection = "columns";
    }
    else{
        button.innerHTML= '&#9776;';
        menu.style.display = "none";
    }
}
