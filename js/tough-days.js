/* =========================================
   BACK TO GALLERY – TOUGH DAYS
========================================= */
function goBack(){
    window.location.href = "gallery.html";
}

/* =========================================
   TOUGH DAYS – EMOTIONAL DARK SCENE JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1️⃣ SLOW REVEAL ON SCROLL (CARDS)
    ========================================= */
    const cards = document.querySelectorAll(".chat-card");

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.25 }
    );

    cards.forEach(card => revealObserver.observe(card));

    /* =========================================
       2️⃣ DARK EMOTIONAL BACKGROUND SHIFT
    ========================================= */
    const darkMoods = [
        "radial-gradient(circle at top, #0b0005, #000 70%)",
        "radial-gradient(circle at top, #0a0012, #000 70%)",
        "radial-gradient(circle at top, #12000a, #000 70%)",
        "radial-gradient(circle at top, #080010, #000 70%)"
    ];

    let moodIndex = 0;

    setInterval(() => {
        document.body.style.background = darkMoods[moodIndex];
        moodIndex = (moodIndex + 1) % darkMoods.length;
    }, 10000);

    /* =========================================
       3️⃣ EMOTIONAL EMOJI FLY (WORKING)
    ========================================= */
    const emojiLayer = document.createElement("div");
    emojiLayer.className = "tough-fly-layer";
    document.body.appendChild(emojiLayer);

    const emojis = ["🥺","💔","🫂","😔","🖤","😭"];

    function createEmoji(){
        const span = document.createElement("span");
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        span.style.left = Math.random() * 100 + "vw";
        span.style.fontSize = (16 + Math.random() * 10) + "px";
        span.style.animationDuration = (18 + Math.random() * 12) + "s";

        emojiLayer.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 32000);
    }

    setInterval(createEmoji, 800);

});

/* =========================================
   🌧️ RAIN + 💔 EMOJI MIX (TOUGH DAYS)
========================================= */

/* ---------- RAIN LAYER ---------- */
const rainLayer = document.createElement("div");
rainLayer.className = "rain-layer";
document.body.appendChild(rainLayer);

function createRainDrop(){
    const drop = document.createElement("span");

    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = (2 + Math.random() * 1.5) + "s";
    drop.style.opacity = Math.random() * 0.4 + 0.2;

    rainLayer.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 4000);
}

/* light continuous rain */
setInterval(createRainDrop, 180);


/* ---------- EMOJI (already yours, just controlled) ---------- */
// 4 second ke baad start
setTimeout(() => {

    createEmoji(); // first emoji

    setInterval(createEmoji, 4000); // every 4 sec

}, 4000);


/* =========================================
   ⚡ SUBTLE THUNDER FLASH
========================================= */
function thunderFlash(){
    document.body.classList.add("thunder");

    setTimeout(() => {
        document.body.classList.remove("thunder");
    }, 200); // very quick flash
}

/* random thunder (25–40 sec gap) */
setInterval(() => {
    if(Math.random() > 0.6){
        thunderFlash();
    }
}, 30000);
