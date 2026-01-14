/* Romantic BG */
const layer = document.getElementById("romanticLayer");
const emojis = ["💖","💘","🤍","🥀","✨","💫","♾️"];

function createLove(){
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*100 + "vw";
    span.style.fontSize = (16 + Math.random()*14) + "px";
    span.style.animationDuration = (18 + Math.random()*14) + "s";
    layer.appendChild(span);
    setTimeout(()=>span.remove(),32000);
}
setInterval(createLove,1800);

/* Answer logic */
function answer(btn,text){
    const card = btn.closest(".question-card");
    card.querySelector(".result").innerHTML = text;
}

function goBack(){
    window.location.href="gallery.html";
}
