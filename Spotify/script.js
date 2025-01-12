let songIndex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let gif=document.getElementById('gif');

let songItems=Array.from(document.getElementsByClassName('songItem'));

let masterSongName=document.getElementById('masterSongName');

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
        let songIndex=parseInt(e.target.id);
        if(e.target.classList.contains('fa-circle-play')){
            makeAllPlays();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            gif.style.opacity=1;
            audioElement.src=`songs/${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            masterSongName.innerText=songs[songIndex].songName;
        }
        else{
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
        
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    songIndex-=1;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('next').addEventListener('click',()=>{
    songIndex+=1;
    if(songIndex>5){
        songIndex=0;
    }
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})