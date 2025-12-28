let ans=document.getElementById("ans")
let value1
let value2
let answer
let choice
let ques=document.getElementById("ques")

function one(){
    ans.innerText+=1;
}
function zero(){
    ans.innerText+=0;
}
function two(){
    ans.innerText+=2;
}
function three(){
    ans.innerText+=3;
}
function four(){
    ans.innerText+=4;
}
function five(){
    ans.innerText+=5;
}
function six(){
    ans.innerText+=6;
}
function seven(){
    ans.innerText+=7;
}
function eight(){
    ans.innerText+=8;
}
function nine(){
    ans.innerText+=9;
}
function decimal(){
    ans.innerText+=".";
}
function allclear(){
    ans.innerText=""
    ques.innerText=""
}
function sum(){
    value1=ans.innerText
    ques.innerText=ans.innerText+"+"
    ans.innerText=""
    choice=1
}
function subtract(){
    value1=ans.innerText
    ques.innerText=ans.innerText+"-"
    ans.innerText=""
    choice=2
}
function multiply(){
    value1=ans.innerText
    ques.innerText=ans.innerText+"X"
    ans.innerText=""
    choice=3
}
function devide(){
    value1=ans.innerText
    ques.innerText=ans.innerText+"/"
    ans.innerText=""
    choice=4
}
function percent(){
    value1=ans.innerText
    ques.innerText=ans.innerText+"%"
    ans.innerText=""
    choice=5
}
function equal(){
    value2=ans.innerText
    ques.innerText+=ans.innerText
    if(choice===1){
        answer=Number(value1)+Number(value2)
    }else if(choice===2){
        answer=Number(value1)-Number(value2)
    }else if(choice===3){
        answer=Number(value1)*Number(value2)
    }else if(choice===4){
        if(value2==0){
            answer="Undefined"
        }else{
            answer=Number(value1)/Number(value2)
        }
    }else if(choice===5 && value2!=0){
        answer=Number(value1)/Number(value2)*100 + "%"
    }
    ans.innerText= "= "+answer
}
function back(){
    ans.innerText=ans.innerText.slice(0,-1);
}
const toggle = document.getElementById("themeToggle");
const main = document.querySelector(".main");
const buttons = document.querySelector(".buttons");
const ans_ = document.getElementById("ans");
const ques_ = document.getElementById("ques");

toggle.addEventListener("change", () => {
  main.classList.toggle("dark");
  buttons.classList.toggle("dark");
  ans_.classList.toggle("dark");
  ques_.classList.toggle("dark");
});

