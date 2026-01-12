const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
    audio.addEventListener("play", () => {
        audios.forEach(a => {
            if(a !== audio){
                a.pause();
            }
        });
    });
});


/* ===============================
   STICKY LEFT TYPING EFFECT
================================ */

const typingLines = [
    "Kuch awaazein hoti hain…",
    "jo dil ke bilkul paas hoti hain ❤️",
    "aur waqt ke saath yaad ban jaati hain ✨"
];

let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 55;   // typing speed
const pauseBetweenLines = 1200;

const typingEl = document.getElementById("typingText");

function typeStickyText(){
    if(!typingEl) return;

    if(charIndex < typingLines[lineIndex].length){
        typingEl.textContent += typingLines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeStickyText, typingSpeed);
    }else{
        // line finished
        setTimeout(() => {
            typingEl.textContent += "\n";
            charIndex = 0;
            lineIndex++;

            if(lineIndex < typingLines.length){
                typeStickyText();
            }
        }, pauseBetweenLines);
    }
}

window.addEventListener("load", () => {
    if(typingEl){
        typingEl.textContent = "";
        typeStickyText();
    }
});
