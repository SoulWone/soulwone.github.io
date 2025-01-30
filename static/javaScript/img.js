let closeBgArr = document.querySelectorAll(".imgs img");
let closeBg = document.querySelector(".imgs");
const mainText = document.querySelector(".main-text");

closeBg.onclick = function () {
  if (closeBg.style.display === "flex") {
    closeBgArr.forEach(function (elem) {
      elem.style.display = "none";
    });
    closeBg.style.display = "none";
    mainText.style.filter = "blur(0)";
  }
};
var listofTags = ["fueltap","suction","second","third"
  ,"oilcontrol","oilcontrol2","oilcontrol3","oilcontrol4",
  "oilcontrol5","filter","filter2","filter21"
  ,"filter22","idleControl","idleControl2","clutch","clutch2"
  ,"shiftLover","candle","candle2","brakes","brakes2","brakes3"
  ,"brakes31","brakes4","brakes41"];

jQuery(function ($) {
  $(".main-text div div").click(function () {

    var el = $(this).attr("class");
    var elImg = document.querySelector("."+el+"-img");

    for(var i = 0;i<listofTags.length;i++){
      if(el == listofTags[i]){
        
        closeBg.style.display = "flex";
        mainText.style.filter = "blur(0.3rem)";
        elImg.style.display = "flex";
    }
  }
  });
});
