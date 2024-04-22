// number gacing game start

let playerone = document.querySelector(".playerone");
let playeroneinput =document.querySelector(".playeroneinput");
let playeronebtn =document.querySelector(".playeronebtn");
let playeroneerr =document.querySelector(".playeroneerr");

let playertwo = document.querySelector(".playertwo");
let playertwoinput =document.querySelector(".playertwoinput");
let playertwobtn =document.querySelector(".playertwobtn");
let playertwoerr =document.querySelector(".playertwoerr");
let two =document.querySelector(".two");
let one =document.querySelector(".one");
let chancetwo =document.querySelector(".chancetwo");

let playeronevalue;
let chance = 3;



playeronebtn.addEventListener("click",()=> {
if(playeroneinput.value){
if(playeroneinput.value-20){
    if(playeroneinput.value > 0 && playeroneinput.value < 10){
      playeronevalue =  playeroneinput.value;
      two.style.display = "block"; 
      one.style.display = "none"; 
      console.log(playeronevalue);
    }else{
   playeroneerr.innerHTML = "Please enter number between 1 to 9."

    }
}else{
    playeroneerr.innerHTML = "Please enter your number value."

}
}else{
    playeroneerr.innerHTML = "Please enter your input value."
}
});

playertwobtn.addEventListener("click",()=> {
    if(playertwoinput.value){
    if(playertwoinput.value-20){
        if(playeroneinput.value > 0 && playertwoinput.value < 10){
          
          if(playeronevalue ==  playertwoinput.value){
            console.log("Player two is win!!");
          }else{
            chance--;
            if(chance !== 0){
                chancetwo.innerHTML = chance;
            }else{
                chancetwo.innerHTML = "Game Over Player Two Win!";

            }
          }
        }else{
       playertwoerr.innerHTML = "Please enter number between 1 to 9."
    
        }
    }else{
        playertwoerr.innerHTML = "Please enter your number value."
    
    }
    }else{
        playertwoerr.innerHTML = "Please enter your input value."
    }
    });

// number gacing game end
