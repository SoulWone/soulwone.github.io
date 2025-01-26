let closeBgArr = document.querySelectorAll(".imgs img");
let closeBg = document.querySelector(".imgs");
const mainText = document.querySelector(".main-text");

const fueltapImg = document.querySelector(".fueltap-img");

const suctionImg = document.querySelector(".suction-img");

const thirdImg = document.querySelector(".third-img");

const secondImg = document.querySelector(".second-img");

closeBg.onclick = function () {
  if (closeBg.style.display === "flex") {
    closeBgArr.forEach(function (elem) {
      elem.style.display = "none";
    });
    closeBg.style.display = "none";
    mainText.style.filter = "blur(0)";
  }
};

jQuery(function ($) {
  $(".main-text div div").click(function () {
    var el = $(this).attr("class");
    switch (el) {
      case "fueltap":
        closeBg.style.display = "flex";
        mainText.style.filter = "blur(0.3rem)";
        fueltapImg.style.display = "flex";
        break;
      case "suction":
        closeBg.style.display = "flex";
        mainText.style.filter = "blur(0.3rem)";
        secondImg.style.display = "flex";
        break;
      case "second":
        closeBg.style.display = "flex";
        mainText.style.filter = "blur(0.3rem)";
        secondImg.style.display = "flex";
        break;
      case "third":
        closeBg.style.display = "flex";
        mainText.style.filter = "blur(0.3rem)";
        thirdImg.style.display = "flex";
        break;
    }
  });
});

