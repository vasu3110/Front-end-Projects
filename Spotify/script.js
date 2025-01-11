let songIndex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let gif=document.getElementById('gif');

let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {
        songName: "Salam-e-ishq", 
        filepath: "./songs/1.mp3", 
        coverPath: "./covers/1.jpg"
    },
    {
        songName: "Amplifier", 
        filepath: "./songs/2.mp3", 
        coverPath: "./covers/2.jpg"
    },
    {
        songName: "Criminal", 
        filepath: "./songs/3.mp3", 
        coverPath: "./covers/3.jpg"
    },
    {
        songName: "Espresso", 
        filepath: "./songs/4.mp3", 
        coverPath: "./covers/4.jpg"
    },
    {
        songName: "Jeene Laga Hoon", 
        filepath: "./songs/5.mp3", 
        coverPath: "./covers/5.jpg"
    },
    {
        songName: "Tum Hi Ho", 
        filepath: "./songs/6.mp3", 
        coverPath: "./covers/6.jpg"
    }
]
songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//Listen To Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((el)=>{
        el.classList.remove('fa-circle-pause');
        el.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((el)=>{
    el.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
        audioElement.src=`songs/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        console.log(el.id);
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})