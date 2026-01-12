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

    status.innerText = "🎧 Sun raha hoon...";
    recognition.start();

    recognition.onresult = function(e){
        const speech = e.results[0][0].transcript.toLowerCase();

        if(speech.includes("jaan i love you")){

            // 💖 EMOTIONAL UNLOCK MESSAGE
            status.innerHTML = "🥺 Is dil ko sirf tumhari awaaz ka hi intezaar tha… ❤️";
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

    const password = "Raani Pari 👑";
    const date = "18/09/2024"; // CHANGE IF NEEDED

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
   COUNTDOWN + CONFETTI (GALLERY)
================================ */
if(document.getElementById("countdown")){
    const birthday = new Date("2026-02-14T00:00:00").getTime();
    let done = false;

    setInterval(() => {
        const now = new Date().getTime();
        const diff = birthday - now;

        if(diff <= 0){
            document.getElementById("countdown").innerText =
                "🎉 Happy Birthday My Love ❤️";
            if(!done){
                confetti();
                done = true;
            }
            return;
        }

        const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const m = Math.floor((diff % (1000*60*60)) / (1000*60));
        const s = Math.floor((diff % (1000*60)) / 1000);

        document.getElementById("countdown").innerText =
            `⏳ ${h}h ${m}m ${s}s`;
    }, 1000);
}

function confetti(){
    const colors = ["#ff0000", "#ff69b4", "#ffd700", "#ffffff"];
    for(let i = 0; i < 150; i++){
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
