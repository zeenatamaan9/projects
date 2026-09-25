let gameseq=[];
let userseq=[];

let btns=["yellow","purple","red","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started==true;

        levelUp();
    }
});

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randclr=btns[randIndx];
    let randbtn=document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    btnFlash(randbtn);
}


function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
         if(userseq.length==gameseq.length){
         setTimeout(levelUp,1000);
         }
    }else{
        h2.innerText=`game over!!`;
        reset();
        }
}


function btnFlash(btn){
     btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
     btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function btnpress(){
    let btn=this;
    userFlash(btn);

    userclr=btn.getAttributes("id");
    userFlash.push(userclr);

    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");//access btn from html
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started==false;
    gameseq=[];
    userseq=[];
    level=0;

}
