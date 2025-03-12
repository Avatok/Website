//Home ScrollDown
function ScrollDown(){
    element = document.getElementById("Q1");
    element.scrollIntoView();
}

//Typing effect Avatok - Pascal
document.addEventListener("DOMContentLoaded", function () {
    const text = "Pascal - Avatok";
    const target = document.getElementById("typing-effect");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            target.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Geschwindigkeit anpassen
        }
    }

    typeEffect();
});
