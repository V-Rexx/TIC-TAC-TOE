let music = new Audio("musics/music.mp3");
let audioTurn = new Audio("musics/ting.mp3");
let gameover = new Audio("musics/gameover.mp3")
let turns = 'X';

//Function to check turn
const changeTurn = () => {
    return turns === "X"?"0": "X";
}

//Function to check win
const checkWin = () => {
    
}

//Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turns;
            changeTurn();
            audioTurn.play();
            checkWin();

        }
    })
})