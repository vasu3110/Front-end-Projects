console.log("Tic Tac Toe")
let music=new Audio("music.mp3");
let turnaudio=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let end=false;
//Function to change the turn
const changeTurn=()=>{
    return turn ==="X"?"O":"X";
}

//Function to check for a win

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
    [0,1,2,5,5,0,20],
    [3,4,5,5,15,0,20],
    [6,7,8,5,25,0,20],
    [0,3,6,-5,15,90,20],
    [1,4,7,5,15,90,20],
    [2,5,8,15,15,90,20],
    [0,4,8,1,16,45,30],
    [2,4,6,-1,16,-45,30],
   ]
   wins.forEach((el)=>{
        if((boxtext[el[0]].innerText!=='' && boxtext[el[1]].innerText!=='' && boxtext[el[2]].innerText!='') && (boxtext[el[0]].innerText===boxtext[el[1]].innerText) && (boxtext[el[1]].innerText===boxtext[el[2]].innerText)){
            let winner=document.querySelector('.info');
            winner.innerText=`${boxtext[el[0]].innerText} is the winner`;
            end=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px";
            document.querySelector('.line').style.transform=`translate(${el[3]}vw,${el[4]}vw) rotate(${el[5]}deg)`;
            document.querySelector('.line').style.width=`${el[6]}vw`;
            document.querySelector('.line').style.display='block';
        }
   })
}
const losemsg=(Loser)=>{
    alert(`${Loser}, You have Lost`);
}
//Game Logic

let boxes=document.getElementsByClassName("box");
// music.play();
Array.from(boxes).forEach((element)=>{
        let boxtext=element.firstChild;                   //Or element.querySelector('.boxtext')
        element.addEventListener('click',(e)=>{
            if(!end){
                if(boxtext.innerText===''){
                    boxtext.innerText=turn;
                    turn=changeTurn();
                    turnaudio.play();
                    document.querySelector('.info').innerText=`Turn For ${turn}`;
                }
                checkWin();
            }
            else{
                let loser=(document.querySelector('.info').innerText=='X is the winner')?'O':'X';
                losemsg(loser);
            }
        })
})

//Add onclick listener to reset button
let reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach((el)=>{
        el.innerText='';  
    })
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    end=false;
    turn="X";
    document.querySelector('.info').innerText=`Turn For ${turn}`;

})

