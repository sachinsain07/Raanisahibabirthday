/* ===============================
   TYPEWRITER TEXT (INDEX)
================================ */
const text = "Is raat me kuch khaas hai…\nAur wo tum ho ✨";
let i = 0;

function typeText(){
    const el = document.getElementById("loveText");
    if(!el) return;

    if(i < text.length){
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, 60);
    }
}

window.onload = () => {
    const el = document.getElementById("loveText");
    if(el){
        el.textContent = "";
        i = 0;
        typeText();
    }
};



/* ===============================
   VOICE ACTIVATION (INDEX)
================================ */
function startVoice(){
    const status = document.getElementById("statusText");

    if(!('webkitSpeechRecognition' in window)){
        status.innerText = "Voice not supported 😔";
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    status.innerText = "🎧 Sun raha hoon Jaan...";
    recognition.start();

    recognition.onresult = function(e){
        const speech = e.results[0][0].transcript.toLowerCase();

        if(speech.includes("jaan i love you")){

            // 💖 EMOTIONAL UNLOCK MESSAGE
            status.innerHTML = "🥺 Meri Raani Sahiba aa gyi....🥳 ❤️";
            status.classList.add("success");

            // ❤️ HEART BURST (UNLOCK MOMENT)
            document.body.insertAdjacentHTML(
                "beforeend",
                "<div class='heart-burst'>❤️</div>"
            );

            // 😤😠 EMOJI / EMOTIONAL REVEAL
            const fight = document.getElementById("emojiFight");
            if(fight){
                fight.style.display = "block";
            }

            // ⏳ Redirect after animation
            setTimeout(() => {
                window.location.href = "login.html";
            }, 4000);

        } else {
            status.innerText = "❌ Phir se bolo ❤️";
        }
    };

    recognition.onerror = function(){
        status.innerText = "❌ Awaaz samajh nahi aayi...";
    };
}


/* ===============================
   LOGIN PAGE
================================ */
function checkLogin(){
    const val = document.getElementById("loginInput").value.trim();
    const status = document.getElementById("loginStatus");

    const password = "Raani Sahiba 👑";
    const date = "07/03/2004"; // CHANGE IF NEEDED

    if(val === password || val === date){
        status.innerText = "❤️ Dil khul gaya…";

        // 🌙 BRIGHTEN MOON ON UNLOCK (SAFE ADD)
        const moon = document.querySelector(".moon");
        if(moon){
            moon.classList.add("bright");
        }

        setTimeout(() => window.location.href = "gallery.html", 2000);
    } else {
        status.innerText = "❌ Galat hai…";
    }
}

/* ===============================
   ROMANTIC COUNTDOWN + CONFETTI
   Date: 15 Jan 2026 | 12:00 AM
================================ */

const countdownEl = document.getElementById("countdown");

if(countdownEl){

    // 🎨 Add romantic class
    countdownEl.classList.add("romantic-countdown");

    const birthday = new Date("2026-01-15T00:00:00").getTime();
    let done = false;

    const timer = setInterval(() => {

        const now = new Date().getTime();
        const diff = birthday - now;

        if(diff <= 0){
            countdownEl.innerHTML = `
                <span class="cd-title">🎉 Happy Birthday</span>
                <span class="cd-love">Meri Raani ❤️</span>
            `;

            if(!done){
                confetti();
                done = true;
            }

            clearInterval(timer);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `
            <span class="cd-line">⏳ Bas thoda sa waqt…</span>
            <div class="cd-time">
                <span>${days}<small>d</small></span>
                <span>${hours}<small>h</small></span>
                <span>${minutes}<small>m</small></span>
                <span>${seconds}<small>s</small></span>
            </div>
        `;

    }, 1000);
}


/* ===============================
   CONFETTI EFFECT (SAME)
================================ */

function confetti(){
    const colors = ["#ff4d6d","#ff85b3","#ffd166","#ffffff"];

    for(let i = 0; i < 160; i++){
        const c = document.createElement("div");
        c.className = "confetti";

        c.style.left = Math.random() * 100 + "vw";
        c.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 5000);
    }
}

/* ===============================
   FINAL POPUP (GALLERY)
================================ */
setTimeout(() => {
    const p = document.getElementById("popup");
    if(p) p.style.display = "flex";
}, 30000);

function closePopup(){
    document.getElementById("popup").style.display = "none";
}




/* ===============================
   STEP 5 — SMOOTH PAGE TRANSITION
================================ */

document.addEventListener("DOMContentLoaded", () => {
    const transition = document.getElementById("pageTransition");
    const links = document.querySelectorAll(".memory-card");

    links.forEach(card => {
        card.addEventListener("click", e => {
            const href = card.getAttribute("href");
            if(!href) return;

            e.preventDefault();

            if(transition){
                transition.classList.add("active");
            }

            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
});
/* =========================================
   💖 GALLERY – ROMANTIC EMOJI MAGIC (MOOD BASED)
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const layer = document.getElementById("galleryRomanticLayer");
    if (!layer) return;

    /* 💌 ROMANTIC WORDS */
    const emojis = [
        "Bubbbu I LOVE YOU 💖",
        "Jaan 💘",
        "Ladddu 💞",
        "Mera Sukoon 😌",
        "Meri Raani 👑",
        "Idhar bhi dekho naa🥺",
        "My love💝"
        
        
    ];

    /* 🌈 ROMANTIC COLORS */
    const romanticColors = [
        "#ffb6ff",
        "#ffd1e8",
        "#ff85d5",
        "#ffc1f3",
        "#fff0f8",
        "#ff9ecf"
    ];

    /* 🎭 MOODS (speed + duration) */
    const moods = [
        { name: "calm",     interval: 2800, minDur: 22, maxDur: 30 },
        { name: "romantic", interval: 1900, minDur: 18, maxDur: 26 },
        { name: "intense",  interval: 800,  minDur: 14, maxDur: 20 }
    ];

    let currentMood = 0;
    let emojiTimer;

    function createRomanticEmoji() {
        const span = document.createElement("span");
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const mood = moods[currentMood];

        span.style.left = Math.random() * 100 + "vw";
        span.style.fontSize = (18 + Math.random() * 16) + "px";
        span.style.animationDuration =
            (mood.minDur + Math.random() * (mood.maxDur - mood.minDur)) + "s";
        span.style.opacity = 0.35 + Math.random() * 0.4;

        /* 🌈 RANDOM COLOR */
        span.style.color =
            romanticColors[Math.floor(Math.random() * romanticColors.length)];

        layer.appendChild(span);
        setTimeout(() => span.remove(), 35000);
    }

    /* ⏱️ START EMOJI LOOP */
    function startMood() {
        clearInterval(emojiTimer);
        emojiTimer = setInterval(createRomanticEmoji, moods[currentMood].interval);
    }

    /* 🔄 CHANGE MOOD EVERY 20s */
    startMood();
    setInterval(() => {
        currentMood = (currentMood + 1) % moods.length;
        startMood();
    }, 20000);
});

/* =========================================
   🌙 SLOW ROMANTIC BACKGROUND SHIFT (UNCHANGED)
========================================= */

const romanticMoods = [
    "radial-gradient(circle at top, #2b0033, #000 70%)",
    "radial-gradient(circle at top, #3a002f, #000 70%)",
    "radial-gradient(circle at top, #1f0036, #000 70%)",
    "radial-gradient(circle at top, #33001a, #000 70%)"
];

let moodIndex = 0;

setInterval(() => {
    document.body.style.background = romanticMoods[moodIndex];
    moodIndex = (moodIndex + 1) % romanticMoods.length;
}, 12000);