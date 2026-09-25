let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ol=document.querySelector("ol");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let dltbtn=document.createElement("button");//create new button
    dltbtn.innerText="delete";//text of button
    dltbtn.classList.add("delete");//class name 
    
    item.appendChild(dltbtn);
    ol.appendChild(item);
    inp.value="";
});

ol.addEventListener("click" ,function(event){
    if(event.target.nodeName== "BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log(" task deleted");
    }
});


// //to delete tasks but only run for old button that is in html
// let dbtns=document.querySelectorAll(".delete");
// for(dbtn of dbtns){
//     dbtn.addEventListener("click", function(){
//     let par=this.parentElement;
//     par.remove();
//     });
// }
