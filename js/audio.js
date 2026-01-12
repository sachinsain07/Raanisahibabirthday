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

/* =========================================
   AUDIO PLAY — BACKGROUND GLOW
========================================= */

const page = document.querySelector(".audio-page");

document.querySelectorAll("audio").forEach(audio => {

    audio.addEventListener("play", () => {
        if(page){
            page.classList.add("glow");
        }
    });

    audio.addEventListener("pause", () => {
        if(page){
            page.classList.remove("glow");
        }
    });

    audio.addEventListener("ended", () => {
        if(page){
            page.classList.remove("glow");
        }
    });

});

/* =========================================
   BACK BUTTON — FADE & GO
========================================= */

function goBack(){
    const page = document.querySelector(".audio-page");
    if(page){
        page.classList.add("fade-out");
    }

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 800);
}

/* =========================================
   AUDIO CARD RIPPLE ON TAP
========================================= */

document.querySelectorAll(".audio-card").forEach(card => {

    card.addEventListener("click", function(e){

        // remove old ripple
        const oldRipple = this.querySelector(".ripple");
        if(oldRipple){
            oldRipple.remove();
        }

        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
        ripple.style.top  = (e.clientY - rect.top  - size / 2) + "px";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });

});
/* =========================================
   AUDIO PAGE — END MEMORIES LOGIC (CLEAN)
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- ELEMENTS ---------- */
    const endBox      = document.getElementById("endMemories");
    const secretMsg   = document.getElementById("secretMessage");
    const heart       = document.querySelector(".pulse-heart");
    const heartSecret = document.getElementById("heartSecret");
    const secretSound = document.getElementById("secretSound");

    if(!endBox) return;

    /* =========================================
       1️⃣ SHOW END BOX ON SCROLL
    ========================================= */
    let endBoxShown = false;

    window.addEventListener("scroll", () => {
        if(endBoxShown) return;

        const rect = endBox.getBoundingClientRect();
        if(rect.top < window.innerHeight - 120){
            endBox.classList.add("show");
            endBoxShown = true;
        }
    });

    /* =========================================
       2️⃣ SECRET MESSAGE — TAP TO REVEAL (ONCE)
       + SOUND + TYPING EFFECT
    ========================================= */
    let secretRevealed = false;
    let fullText = "";

    if(secretMsg){
        fullText = secretMsg.textContent;
        secretMsg.textContent = "";
    }

    function typeSecretText(text, el, speed = 40){
        el.textContent = "";
        let i = 0;

        function type(){
            if(i < text.length){
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    endBox.addEventListener("click", () => {
        if(secretRevealed || !secretMsg) return;

        secretMsg.classList.add("show");

        // play sound once
        if(secretSound){
            secretSound.currentTime = 0;
            secretSound.play().catch(()=>{});
        }

        // typing effect
        typeSecretText(fullText, secretMsg);

        secretRevealed = true;
    });

    /* =========================================
       3️⃣ HEART TAP — DIFFERENT MESSAGE
    ========================================= */
    if(heart && heartSecret){
        heart.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent box click
            heartSecret.classList.toggle("show");
        });
    }

});
