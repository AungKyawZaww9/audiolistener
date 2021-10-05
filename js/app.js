// UI 
const title = document.getElementById('title');
const imgcontainer= document.querySelector('.imgcontainer img');
const headerbox = document.querySelector('.headerbox');


const audio = document.getElementById('audio');

const back = document.getElementById('back');
const play = document.getElementById('play');
const next = document.getElementById('next');

const progresscontainer= document.querySelector('.progress-container');
const progress = document.querySelector('.progress');


let songindx = 0;
songs = ["sample1","sample2","sample3"];

// console.log(songs[songindx]);
loadsong(songs[songindx]);

function loadsong(music){
    

    title.innerText = music;
    audio.src = `./music/${music}.mp3`;
    imgcontainer.src = `img/${music}.jpg`;
    headerbox.style.backgroundImage = `linear-gradient(to right, rgb(84, 74, 125,0.7), rgba(250, 210, 92, 0.5)),url(./img/${music}.jpg)`;

}


play.addEventListener('click',()=>{
    // console.log("hey");

    const isplaying = headerbox.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});


function playsong(){
    headerbox.classList.add('play');

    play.querySelector('.fas').classList.remove('fa-play');
    play.querySelector('.fas').classList.add('fa-pause');

    audio.play();

}


function pausesong(){
    headerbox.classList.remove('play');

    play.querySelector('.fas').classList.add('fa-play');
    play.querySelector('.fas').classList.remove('fa-pause');

    audio.pause();

}



next.addEventListener('click',nextsong);
back.addEventListener('click',backsong);

function nextsong(){
    // console.log("next");

    songindx++;

    if(songindx > songs.length -1){
        songindx = 0;
    }
    // console.log(songindx);
    loadsong(songs[songindx]);

    playsong();
}


function backsong(){
    // console.log("back");

    songindx--;

    if(songindx < 0){
        songindx = songs.length -1;
    }
    // console.log(songindx);

    loadsong(songs[songindx]);
    playsong();
}



function progressbar(e){
    // console.log("I'm working");

    // console.log(audio);
    // console.log(audio.currentTime);
    // console.log(audio.duration);
    // const progresspercent = (audio.currentTime / audio.duration) * 100;
    // progress.style.width = `${progresspercent}%`;
    // console.log(progresspercent);

    // const currenttime = this.currentTime;
    // const duration = this.duration;
    // const progresspercent =(currenttime / duration) * 100;
    // progress.style.width = `${progresspercent}%`;
    // console.log(duration);


    const {currentTime , duration} = e.target;
    const progresspercent = (currentTime / duration) * 100;
    progress.style.width = `${progresspercent}%`;

    
    
}


audio.addEventListener('timeupdate',progressbar);



progresscontainer.addEventListener("click",(e)=>setprogress(e));

function setprogress(e){
    // console.log('hey');
    const width = e.target.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);

    const duration = audio.duration;
    // console.log(duration);


    audio.currentTime = (clickx / width) * duration;

}

audio.addEventListener('ended',nextsong);



const footerboxs = document.querySelectorAll('.footerbox li');
// console.log(footerbox);

footerboxs.forEach(footerbox=>{
    // console.log(footerbox);

    footerbox.addEventListener('click',(e)=>{
        // console.log("hey");

        // console.log(e.target.lastElementChild.innerText);

        if(e.target.lastElementChild.innerText === "sample1"){
            // console.log("hey");

            loadsong(songs[0]);
            playsong();

        }else if(e.target.lastElementChild.innerText === "sample2"){
            // console.log("two");

            loadsong(songs[1]);
            playsong();
        }else{
            // console.log('three');

            loadsong(songs[2]);
            playsong();
        }
    });
});

