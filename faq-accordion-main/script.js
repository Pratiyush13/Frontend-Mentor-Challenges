let btn1=document.querySelector("#q1");
let btn2=document.querySelector("#q2");
let btn3=document.querySelector("#q3");
let btn4=document.querySelector("#q4");
let answer1=document.querySelector(".ans1");
let answer2=document.querySelector(".ans2");
let answer3=document.querySelector(".ans3");
let answer4=document.querySelector(".ans4");
let turn=true;
let turn2=true;
let turn3=true;
let turn4=true;
let image1='url("assets/images/icon-plus.svg")';
let image2='url("assets/images/icon-minus.svg")';

const change=()=>{
    if(btn1.style.backgroundImage===image2){
        btn1.style.backgroundImage=image1;
    }   else{
        btn1.style.backgroundImage=image2;
    }
}

const change2=()=>{
    if(btn2.style.backgroundImage===image2){
        btn2.style.backgroundImage=image1;
    }   else{
        btn2.style.backgroundImage=image2;
    }
}

const change3=()=>{
    if(btn3.style.backgroundImage===image2){
        btn3.style.backgroundImage=image1;
    }   else{
        btn3.style.backgroundImage=image2;
    }
}

const change4=()=>{
    if(btn4.style.backgroundImage===image2){
        btn4.style.backgroundImage=image1;
    }   else{
        btn4.style.backgroundImage=image2;
    }
}

btn1.addEventListener("click",()=>{
    change();
    if(turn===true){
    showAns1();
    turn=false;
    } else{
        hideAns1();
        turn=true;
    }
})

btn2.addEventListener("click",()=>{
    change2();
    if(turn2===true){
    showAns2();
    turn2=false;
    } else{
        hideAns2();
        turn2=true;
    }
})

btn3.addEventListener("click",()=>{
    change3();
    if(turn3===true){
    showAns3();
    turn3=false;
    } else{
        hideAns3();
        turn3=true;
    }
})

btn4.addEventListener("click",()=>{
    change4();
    if(turn4===true){
    showAns4();
    turn4=false;
    } else{
        hideAns4();
        turn4=true;
    }
})



const showAns1=()=>{
    answer1.classList.remove("hide");
}
const showAns2=()=>{
    answer2.classList.remove("hide");
}
const showAns3=()=>{
    answer3.classList.remove("hide");
}
const showAns4=()=>{
    answer4.classList.remove("hide");
}

const hideAns1=()=>{
    answer1.classList.add("hide");
}
const hideAns2=()=>{
    answer2.classList.add("hide");
}
const hideAns3=()=>{
    answer3.classList.add("hide");
}
const hideAns4=()=>{
    answer4.classList.add("hide");
}
