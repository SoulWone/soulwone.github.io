const imgs = document.querySelector(".imgs");
const mainText = document.querySelector(".main-text");
const button1 = document.querySelector(".fueltap");
button1.onclick = function(){
    if(imgs.style.display === "none"){
       
        imgs.style.display = "flex";
        mainText.style.filter = "blur(0.3rem)";
    }
}
imgs.onclick = function(){
    if(imgs.style.display === "flex"){
        imgs.style.display = "none";
        mainText.style.filter = "blur(0)";
    }
}