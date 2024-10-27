let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
})

// step2

function btnFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userSeq=[];
   level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}


function checkAns(idx){
    // console.log("current level:",level);
    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
       }
    } else{
        h2.innerHTML=`Game over! your score was <b>${level}</b>.<br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress(){
    // console.log("button was pressed");
   let btn=this;
   btnFlash(btn);

   userColor=btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   
   checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}