console.log("Welcome to Spotify");

// initialize variables
let songIndex = 0;
let audioElement = new Audio("/Projec-1/songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName : "Warriyo - Mortals (feat.  Laura Brehm) [NCS Release]", filePath : "/Projec-1/songs/1.mp3", coverPath : "/Projec-1/covers/1.jpg"},
    {songName : "Cialo - Huma-Huma", filePath : "/Projec-1/songs/2.mp3", coverPath : "/Projec-1/covers/2.jpg"},
    {songName : "DEAF KEV - Invincible [NCS Release]-320k", filePath : "/Projec-1/songs/3.mp3", coverPath : "/Projec-1/covers/3.jpg"},
    {songName : "Rabba - Salam-e-Ishq", filePath : "/Projec-1/songs/4.mp3", coverPath : "/Projec-1/covers/4.jpg"},
    {songName : "Sakhiyaan - Salam-e-Ishq", filePath : "/Projec-1/songs/5.mp3", coverPath : "/Projec-1/covers/5.jpg"},
    {songName : "Bhula Dena - Salam-e-Ishq", filePath : "/Projec-1/songs/6.mp3", coverPath : "/Projec-1/covers/6.jpg"},
    {songName : "Tumhari kasam - Salam-e-Ishq", filePath : "/Projec-1/songs/7.mp3", coverPath : "/Projec-1/covers/7.jpg"}
]

// songItem list src update
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle master-play/pause  click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Handle previous and next icons
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 6;
    }
    else{
        songIndex -=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `/Projec-1/songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `/Projec-1/songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})

//Event Listeners

// Progress bar
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100; 
})


// songlist icon play
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');                   
        audioElement.currentTime = 0;
        audioElement.src = `/Projec-1/songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
     })
})


