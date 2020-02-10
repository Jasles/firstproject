"use strict";
let startNewGame = document.querySelector("h1");
console.log(startNewGame);
startNewGame.addEventListener("click", redButton);

function redButton() {
  location.reload();
}

document.querySelectorAll(".square");
let gridSquares = document.querySelectorAll("img:first-child");
for (let i = 0; i < gridSquares.length; i++) {
  gridSquares[i].addEventListener("click", changePic);
}

function changePic(e) {
  let firstPic = e.target;

  firstPic.style.display = "none";
  let secondPic = firstPic.nextSibling;

  secondPic.style.display = "inline";
}

const twoPoints = document.querySelectorAll(".grid .Two");
const onePoints = document.querySelectorAll(".grid .One");
const towerPoints = document.querySelectorAll(".grid .Tower");
const scoreBox = document.querySelector("h2");
let score = 0;
let peopleAidedBox= document.querySelector("h3");

const twoScore = function(e) {
  score = score + 2;
  if (score >= 0 && score < 12) {
      scoreBox.textContent = "Score" + " " + score;
    
    let peopleAided = "People Aided"+ " " + (score * 120)
      peopleAidedBox.textContent= peopleAided

  } else if (score >=12) {

    const winModal=document.querySelector(".bg-modal2")
    const winModalContent=document.querySelector(".modal-content2")

    winModalContent.style.display="block";
    winModal.style.display="flex";
     
    

  } else{ 
    const looseModal=document.querySelector(".bg-modal1")
     const looseModalContent=document.querySelector(".modal-content1")

     looseModalContent.style.display="block";
     looseModal.style.display="flex"

  }}

  twoPoints.forEach(twoPoint => {
    twoPoint.addEventListener("click", twoScore, { once: true });
  });


  const oneScore = function(e) {
  score = score + 1;
    if (score >= 0 && score < 12) {
    scoreBox.textContent = "Score" + " " + score;

    let peopleAided = "People Aided"+ " " + (score * 120)
    peopleAidedBox.textContent= peopleAided

  } else if (score>=12){
    const winModal2=document.querySelector(".bg-modal2")
    const winModalContent2=document.querySelector(".modal-content2")

    winModalContent2.style.display="block";
    winModal2.style.display="flex";


} else {
  const looseModal=document.querySelector(".bg-modal1")
  const looseModalContent=document.querySelector(".modal-content1")

  looseModalContent.style.display="block";
  looseModal.style.display="flex";
  }
};
onePoints.forEach(onePoint => {
  onePoint.addEventListener("click", oneScore, { once: true });
});

const towerScore = function(e) {
  score = score - 3;
  if (score >=0) {
    scoreBox.textContent = "Score" + " " + score;

    let peopleAided = "People Aided"+ " " + (score * 120)
    peopleAidedBox.textContent= peopleAided
    
  } else {
    const looseModal=document.querySelector(".bg-modal1")
    const looseModalContent=document.querySelector(".modal-content1")
  
    looseModalContent.style.display="block";
    looseModal.style.display="flex";
  }
};

towerPoints.forEach(towerPoint => {
  towerPoint.addEventListener("click", towerScore, { once: true })});