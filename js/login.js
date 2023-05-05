// document.getElementById("email").addEventListener("keyup" , function(){
//   const emailText = document.getElementById("email");
//   console.log(emailText.value);
// });

document.getElementById("login-btn").addEventListener("click" , function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(email == "abc@gmail.com" && password == "12345678"){
        window.location.href ="bank.html";
    }
    else{
        alert("You are a unvalid user");
    }
    
   
});

