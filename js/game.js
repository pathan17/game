let playerOne = document.querySelector(".playerOne");
let item = document.querySelector(".item");
let setNumber = document.getElementById("setNumber");
let gessNumber = document.getElementById("gessNumber");
let playerTwo = document.querySelector(".playerTwo");
let input = document.getElementById("input");
let roundTry = document.querySelectorAll(".try");
let click = document.getElementById("click");
let span = document.getElementById("span")

gessNumber.style.display="none";
playerTwo.style.display="none";
let randomNumber;
let arry =[];
let roundSpan = roundTry.length;

setNumber.addEventListener("click",function(){
    randomNumber = Math.floor(Math.random()*9)+1;
    console.log(randomNumber)
    item.innerHTML = "gess number redy";
    setNumber.style.display = 'none';
    gessNumber.style.display="block";
    
})
gessNumber.addEventListener("click",function(){
    playerTwo.style.display="block";
    playerOne.style.display="none";
    span.innerHTML= roundTry.length;
    
})

click.addEventListener("click", function(){

   arry.push(input.value)
   for(i=0; i<arry.length; i++){

      if(arry[i]==randomNumber){
        window.location.assign("winimage.html")
      }
      else if(input.value==''){
        alert("enter your number")

      }
       
      else{
        roundTry[i].classList.add("colorChange")
        addHbeSpan = roundSpan-arry.length;
        span.textContent = addHbeSpan
        if(addHbeSpan<0){
          playerTwo.style.display="none";
          window.location.assign('lossimage.html')
          
        }
       
      }
   }
    
    input.value=''
    
})
