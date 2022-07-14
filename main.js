const form = document.querySelector("form");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");


form.addEventListener("submit", function(e){
    if(message.value.length < 10){

    
    e.preventDefault();   
        
    
    if(message.value.length < 10){
        errorNodes[0].innerText = "El mensaje debe contener más de 10 letras";
        message.classList.add("error-border");
        
    }
    
} else if (message.value.length > 10){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
        
    }

    message.classList.remove("error-border")
}
})