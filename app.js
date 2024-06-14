let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara= document.querySelector("#userscore");
const compscorepara= document.querySelector("#compscore");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];
}
const drawgame =()=>{
    msg.innerText="Game draw! play again.";
    msg.style.backgroundColor="grey";
}
const showinner = (userwin,userChoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        msg.innerText =(` You Win! Your ${userChoice} beats ${compchoice}`);
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=(` You Lost! ${compchoice} beats your ${userChoice}`);
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    console.log("user-choice = ",userChoice);
    const compchoice=gencompchoice();
    console.log("comp-choice = ",compchoice);
    if(userChoice === compchoice){
    
        drawgame();
    }
    else{
        let userwin=true;
        if(userChoice === "rock"){
            userwin = compchoice === "paper" ? false :true;
        }
        else if(userChoice === "paper"){
            userwin = compchoice === "scissors" ?false :true;
        }
        else{
            userwin = compchoice ==="rock"? false : true;
        }
        showinner(userwin,userChoice,compchoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});