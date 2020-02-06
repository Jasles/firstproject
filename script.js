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
{

    gridSquares[i].addEventListener ("click", changePic)
}

function changePic (e)
{
    let firstPic= e.target;

    firstPic.style.display= "none"
    let secondPic =firstPic.nextSibling 

    secondPic.style.display="inline"
}



const twoPoints= document.querySelectorAll('.grid .Two')
const onePoint= document.querySelector('.grid .One')
const scoreBox= document.querySelector('h2')
let score = 0

twoPoints.forEach(twoPoint => {
    twoPoint.addEventListener('click', (e) => {
        console.log(e)
        score = score + 2
        scoreBox.textContent= "Score" + " " + score
})
})
