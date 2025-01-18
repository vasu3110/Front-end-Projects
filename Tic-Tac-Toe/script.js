console.log("Tic Tac Toe")
let music=new Audio("music.mp3");
let turnaudio=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";

//Function to change the turn
const changeTurn=()=>{
    return turn ==="X"?"0":"X";
}

//Function to check for a win
const checkWin=()=>{

}

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=document.querySelector('.boxtext');
    boxtext.addEventListener('click',(e)=>{
        if(e.innerText===''){
            e.innerText=turn;
            changeTurn();
            turnaudio.play();
        }
    })
})

