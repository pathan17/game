let email = "badhanpathan@gmail.com"
let pass =123456789;
let num = "01731567106";

let email_arrow = document.querySelector(".email_arrow")
let password_arrow= document.querySelector(".password_arrow")
let number_arrow= document.querySelector(".number_arrow")


let btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let number = document.getElementById("number").value;
    if(email == "" || !email. includes("@")){
       email_arrow.textContent="enter your email push?"
    }
    else{
        email_arrow.textContent=''

    }
    if(password ==""){
      password_arrow.textContent="enter you password push?"
    }
    else{
        password_arrow.textContent=''
        
    }
    if( number ==""){
        number_arrow.textContent="enter you number push?"
      }
      else if (number.length>11 || number.length<11) {
        number_arrow.textContent ='11 disit number'
      }
      else{
        number_arrow.textContent=''
          
      }



      if (email==email && pass == password && num == number){
         window.location.href="game.html"
      }
    
})