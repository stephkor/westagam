  
let id = document.getElementById("id");
let pw = document.getElementById("pw");
let btn = document.getElementById("login_btn");
        
document.addEventListener("keyup", function() {
    if (id.value.length > 0  && pw.value.length > 0) {
       btn.style.opacity = 1; 
     } else {
        btn.style.opacity = 0.33;
        }
    });












