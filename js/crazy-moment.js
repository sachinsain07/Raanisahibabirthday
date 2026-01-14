/* =========================================
   🎬 ONLY ONE VIDEO PLAY AT A TIME
========================================= */

const allVideos = document.querySelectorAll(".crazy-media video");

allVideos.forEach(video => {

    // jab koi video play ho
    video.addEventListener("play", () => {

        allVideos.forEach(otherVideo => {
            if(otherVideo !== video){
                otherVideo.pause();
            }
        });

    });

});


/* =========================================
   🎬 PLAY ICON OVERLAY + ONE VIDEO LOGIC
========================================= */

const videoBoxes = document.querySelectorAll(".video-box");

videoBoxes.forEach(box => {
    const video = box.querySelector("video");
    const overlay = box.querySelector(".play-overlay");

    // overlay click → play video
    overlay.addEventListener("click", () => {
        video.play();
    });

    // jab video play ho
    video.addEventListener("play", () => {

        // baaki sab videos pause
        videoBoxes.forEach(otherBox => {
            const otherVideo = otherBox.querySelector("video");
            if(otherVideo !== video){
                otherVideo.pause();
                otherBox.classList.remove("playing");
            }
        });

        box.classList.add("playing");
    });

    // jab video pause ho
    video.addEventListener("pause", () => {
        box.classList.remove("playing");
    });
});


/* =========================================
   💖 FUN + ROMANTIC EMOJI BACKGROUND
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const emojiLayer = document.createElement("div");
    emojiLayer.className = "fun-emoji-layer";
    document.body.appendChild(emojiLayer);

    const emojis = [
        "💖","💘","😍","🥰","😘",
        "🤪","😂","😆","✨","💫"
    ];

    function createEmoji(){
        const span = document.createElement("span");
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        span.style.left = Math.random() * 100 + "vw";
        span.style.fontSize = (18 + Math.random() * 14) + "px";
        span.style.animationDuration = (18 + Math.random() * 12) + "s";
        span.style.opacity = 0.25 + Math.random() * 0.3;

        emojiLayer.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 32000);
    }

    // 🔁 frequency (balanced for romance)
    setInterval(createEmoji, 1800);

});
