let h2=document.querySelector("h2");
let gameSeq=[];
let userSeq=[];
let btns=document.querySelectorAll(".btn");
let started=false;
let level=0;
let score = 0;
let body=document.querySelector("body");
const defeat = new Audio;
defeat.src="./bhai bhai sound effect.mp3";
const level10Audio= new Audio;
level10Audio.src="./abhi-maza-ayagga.mp3";
const level5Audio= new Audio;
level5Audio.src="./spiderman-meme-song-2-0.mp3";
document.addEventListener("keypress", function (){
    if(started==false)
    {
        console.log("Game started");
        started=true;
        for(let i=0; i<btns.length; i++)
        {
            btns[i].addEventListener("click", btnPress);
        }
        levelUp();
    } 
});
document.addEventListener("click", function (){
    if(started==false)
    {
        console.log("Game started");
        started=true;
        for(let i=0; i<btns.length; i++)
        {
            btns[i].addEventListener("click", btnPress);
        }
        levelUp();
    } 
});
function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function levelUp(){
    userSeq=[];
    if(level==10){
        level10Audio.play();
    }
    if(level==5){
        level5Audio.play();
    }
    level++;
    h2.innerText=`Level ${level}`;
    //Select random button and pass to flash() function
    let randIdx=Math.floor(Math.random()*4);
    let randBtn=btns[randIdx];
    gameSeq.push(randIdx);
    gameFlash(randBtn);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}
function flashRed(){
    console.log('in flashred');
    body.classList.add("bgcRed");
    setTimeout(function(){body.classList.remove("bgcRed");}, 300);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            score=score+level;
            setTimeout(levelUp, 1500);
        }
    }
    else{
        h2.innerText=`Game over! Press any key to start. Your score : ${score}`;
        defeat.play();
        flashRed();
        setTimeout(reset, 1000);
    }
}
function btnPress(){
    let idx=this.getAttribute("id");
    if(idx=='0') idx=0;
    else if(idx=='1') idx=1;
    else if(idx=='2') idx=2;
    else idx=3;
    userFlash(btns[idx]);
    userSeq.push(idx);
    checkAns(userSeq.length-1);
}
function reset(){
 for(let i=0; i<btns.length; i++)
    {
        btns[i].disabled=true;
    }
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    score=0;
}
