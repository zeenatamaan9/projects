// to print random no. from 0 to 100
// let randomNo= Math.floor(Math.random()*100)+1

// const max=prompt("enter max number");
// const random=Math.floor(Math.random*max+1);

// let guess=prompt("guess your number");

// while(true){
//     if(guess=="quite"){
//         console.log("quitting this game");
//         break;
//     }
//     if(guess=random){
//         console.log("congtrates !! random number is", random);
//         break;
//     }
//     else if(guess<random){
//         console.log("your guess is smaller than random");
//     }
//     else{
//         console.log("your guess is larger than random");
//     }
// }

// function rolldice(){
//     let dice=Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }
// rolldice();
// rolldice();

//write arrow function 

// const square= n => a*a ;
// console.log(square(3));

// let id = setInterval(()=>{
//     console.log("hello world");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// }, 10000);

// let para=document.createElement("p");
// para.innerText="hi i'm red!!";
// document.querySelector("body").append(para);

// para.classList.add('red');

// let h3=document.createElement("h3");
// h3.innerText="hi i'm blue!!";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// h1.innerText="hello i'm in a div";

// let p=document.createElement("p");
// p.innerText="HELLO ME TOO!";

// div.append(h1);
// div.append(p);
// div.classList.add("box");

// document.querySelector("body").append(div);

// let btns=document.querySelectorAll("button");
// // console.dir(btn);
// // btn.onclick=function(){
// //     // console.log("button is clicked!");
// //     alert("button is clicked");
// // };
// for(btn of btns){
//     btn.onclick=sayhHello;

// }
//  function sayhHello(){
//     console.log("hello jii button click hogya!");
//  }


// let btn=document.querySelector("button");
// btn.addEventListener("click" , function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;

//     console.log("color updated");
// });


// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color= `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let p=document.querySelector("p");
// p.addEventListener("mouseenter", function(){
//     p.style.color="blue";
// })

let todo = [];
let req = prompt("Enter the request");

while (true) {
    if (req == "quit") {
        console.log("logout the todo");
        break;
    }

    if (req == "list") {
        console.log("-------------")
        for (task of todo) {
            console.log(task);
        }
        console.log("--------------")
    }

    else if (req == "add") {
        let task = prompt("Enter the task");
        todo.push(task);
        console.log("task added");
    }

    else if (req == "delete") {
        let idx = prompt("Enter the delete task");
        todo.splice(idx, 1);
        console.log("delete task");
    }

    else {
        console.log("wrong request");
    }

     req = prompt("Enter the request");
}

