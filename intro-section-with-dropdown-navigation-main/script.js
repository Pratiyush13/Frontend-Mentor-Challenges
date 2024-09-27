let feat_comp=document.querySelectorAll(".drop1");
let compa=document.querySelector(".drop2");
let featuresBox=document.querySelector(".features");
let companyBox=document.querySelector(".company");
let arrowDowntoUp1=document.querySelector("#down1");
let arrowDowntoUp2=document.querySelector("#down2");
let arrowDowntoUp3=document.querySelector("#dn");
let arrowDowntoUp4=document.querySelector("#dn2");
let menuBars=document.querySelector("#menu");
let closeButton=document.querySelector(".cross")
let menuScreen=document.querySelector(".menuscreen");
let example=document.querySelector(".example");
let featuresExp=document.querySelector("#f");
let featExp=document.querySelector(".featuexpanded");
let comExp=document.querySelector("#b");
let compExp=document.querySelector(".com-expanded");
let crossButton=document.querySelector("#close");
let body=document.querySelector("body");
let xy=true;
let xyz=true;
let x=true;

feat_comp.forEach((fc)=>{
    fc.addEventListener("click",()=>{
        console.log("clicked featurebox");
        featBox();
    })        
})

    featuresExp.addEventListener("click",()=>{
        functiona();
    })

   comExp.addEventListener("click",()=>{
    functionb();
    })

let functiona=()=>{
    console.log("abcd");
    if(xy===true){
        arrSwitchup3();
        featExp.style.display="inline-block";
        xy=false;
    }else{
        
        arrSwitchdown3();
        featExp.style.display="none";
        xy=true;
    }
}

let functionb=()=>{
    console.log("clicked");
    if(xyz===true){
        arrSwitchup4();
        compExp.style.display="inline-block";
        xyz=false;
    }else{
        arrSwitchdown4();
        compExp.style.display="none";
        xyz=true;
    }
}
    
const menutocross=()=>{
    menuBars.style.display="none";
    crossButton.style.display="block"
    menuScreen.classList.remove("hide");
    console.log("clicked bars");
    body.style.backgroundColor="rgba(0, 0, 0, 0.753)";
}

const crossbtn=()=>{
    menuBars.style.display="inline-block";
    crossButton.style.display="none";
    menuScreen.classList.add("hide");
    console.log("clicked cross");
    body.style.backgroundColor="";
}

crossButton.addEventListener("click",()=>{
    crossbtn();
})

compa.addEventListener("click",()=>{
    console.log("clicked company box")
    compBox();
})

menuBars.addEventListener("click",()=>{
    menutocross();
})

const featBox=()=>{
    if(x===true){
    featuresBox.classList.remove("hide");
    arrSwitchup1();
    x=false;
    }else{
    featuresBox.classList.add("hide");
    arrSwitchdown1();
    x=true;
    }
}

const compBox=()=>{
    if(x===true){
        companyBox.classList.remove("hide");
        arrSwitchup2();
        x=false;
        }else{
        companyBox.classList.add("hide");
        arrSwitchdown2();
        x=true;
        }
}

const arrSwitchup1=()=>{
    arrowDowntoUp1.style.rotate="180deg" 
}

const arrSwitchup2=()=>{
    arrowDowntoUp2.style.rotate="180deg" 
}

const arrSwitchdown1=()=>{
    arrowDowntoUp1.style.rotate="0deg" 
}

const arrSwitchdown2=()=>{
    arrowDowntoUp2.style.rotate="0deg" 
}

const arrSwitchup3=()=>{
    arrowDowntoUp3.style.rotate="180deg" 
}

const arrSwitchdown3=()=>{
    arrowDowntoUp3.style.rotate="0deg" 
}

const arrSwitchup4=()=>{
    arrowDowntoUp4.style.rotate="180deg" 
}

const arrSwitchdown4=()=>{
    arrowDowntoUp4.style.rotate="0deg" 
}



