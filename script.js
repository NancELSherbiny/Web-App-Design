function PopUp(card) {
  
    var layout = document.querySelector(".friends");
    layout.style.filter = "blur(5px)";

    var popUp = document.querySelector(".pop-up");
    var popUpImg = popUp.querySelector(".img-in-pop");
    var cardImg = card.querySelector(".img-in-card");
  
    popUpImg.src = cardImg.src;
    popUpImg.alt = cardImg.alt;
  
    
    const name = card.querySelector(".pet-name").innerText;
    popUp.querySelector(".info-in-pic h3").innerText = name + ".";
  
    popUp.style.display = "flex";

  }
  
document.querySelector(".pop-up .fa-xmark").addEventListener("click", () => {
document.querySelector(".pop-up").style.display = "none";
var layout = document.querySelector(".friends");
layout.style.filter = "none";
  });
    