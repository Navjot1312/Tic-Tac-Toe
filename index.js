let turn="X";
let isgameOver=false;
let gameover=new Audio("./sounds/gameover.mp3");
let music=new Audio("./sounds/music.mp3");
let ting=new Audio("./sounds/ting.mp3");

function changeTurn(){
    // return "X"?"0":"X"
    if(turn==="X"){
        return "0";
    }
    else if(turn==="0")
    {
        return "X";
    }
}

function checkWin(){
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        // console.log(text[e[0]].innerText  ,text [e[1]].innerText  , text [e[2]].innerText)
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            // console.log("winning");
            boxtext[e[0]].style.color="red";
            boxtext[e[1]].style.color="red";
            boxtext[e[2]].style.color="red";
            document.querySelector(".turn").innerText= boxtext [e[0]].innerText +" Won";
            document.querySelector(".turn").style.color="red";
            document.querySelector(".img").style.width="150px";
            isgameOver=true;
            gameover.play();
            // setInterval(()=>{let boxtexts= document.querySelectorAll(".boxtext");
            // Array.from(boxtexts).forEach(e=>{
            //     e.innerText="";
            // });},1000);
            // turn="X";
            // isgameOver=false;
            // document.querySelector(".turn").innerText="Turn for "+turn;
            // document.querySelector(".img").style.width="0px";
        }
       
        
    })
}





let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(box=>{
    let text=box.querySelector(".boxtext");
    box.addEventListener("click",()=>{
        // console.log("clicked");
        // console.log("inner"+text.innerText);
        
        if(text.innerText===""){
            text.innerText=turn;
            // console.log(turn);
            turn=changeTurn();
            if(isgameOver===true){
                resetNow();
                box.style.background="azure";
            }
            
            checkWin();
            if(isgameOver==false){
                ting.play();
            document.querySelector(".turn").innerText="Turn for "+turn;
            }
        }
        
    })
});


reset.addEventListener("click",resetNow);
//    console.log("resert");

function resetNow(){
    let boxtext= document.querySelectorAll(".boxtext");
   Array.from(boxtext).forEach(e=>{
    e.innerText="";
    e.style.color="black";
   });
   
   turn="X";
   isgameOver=false;
   document.querySelector(".turn").innerText="Turn for "+turn;
   document.querySelector(".turn").style.color="black";
   document.querySelector(".img").style.width="0px";
}