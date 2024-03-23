let songIndex=0;
let audioElement=new Audio('song1.mp3');
let masterPlay=document.getElementById("masterPlay");
let progbar=document.getElementById("progbar");
let gif=document.getElementById("gif");
let songs=[
{ songName:"Gaali valuga",filePath:"song1.mp3",coverPath:"cover1.jpeg"},
{ songName:"Bayataku",filePath:"song2.mp3",coverPath:"cover2.jpeg"},
{ songName:"Legend",filePath:"song3.mp3",coverPath:"cover3.jpeg"},
{ songName:"Lala bheemla",filePath:"song4.mp3",coverPath:"cover4.jpeg"},
{ songName:"Bheemla Nayak",filePath:"song5.mp3",coverPath:"cover5.jpeg"}
]
let songItem=Array.from(document.getElementsByClassName("songItem"));
songItem.forEach((element,i)=>
{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener("click",function(){
    if(audioElement.paused||audioElement.currentTime<=0)
    {audioElement.play();
    audioElement.classList.remove("fa-solid fa-circle-play");
    audioElement.classList.add("fa-solid fa-circle-pause");
    gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        audioElement.classList.remove("fa-solid fa-circle-pause");
        audioElement.classList.add("fa-solid fa-circle-play");
        gif.style.opacity=0;
    }

});
audioElement.addEventListener('timeupdate',function()
{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progbar.value=progress;
})
progbar.addEventListener('change',function()
{
    audioElement.currentTime=(progbar.value*audioElement.duration)/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        audioElement.src='song' +songIndex+ '.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        console.log(index);
    })
}
)