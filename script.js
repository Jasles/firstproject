"use strict"
let startNewGame=document.querySelector("h1")
console.log ( startNewGame)
startNewGame.addEventListener('click',redButton)

function redButton(){
    location.reload()
}

document.querySelectorAll(".square")
let gridSquares= document.querySelectorAll("img:first-child")
for (let i=0; i<gridSquares.length; i++)

gridSquares[i].addEventListener ("click", changePic)
function changePic (e)
{console.log (e)
let firstPic= e.target;
console.log(firstPic)
firstPic.style.display= "none"
let secondPic =firstPic.nextSibling 
console.log(secondPic)
secondPic.style.display="inline"
}



