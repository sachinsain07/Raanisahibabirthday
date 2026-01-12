/* =========================================
   RECORDING PAGE — LOGIC
   1️⃣ One audio at a time
   2️⃣ Glow + pulse on play
   3️⃣ Sticky text typing effect
   4️⃣ 🔊 Auto-center playing card
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       🎧 AUDIO PLAY CONTROL
    ================================= */

    const cards = document.querySelectorAll(".record-card");
    let currentAudio = null;
    let currentCard = null;

    /* 🔊 AUTO-CENTER FUNCTION */
    function centerCard(card){
        card.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    cards.forEach(card => {
        const audio = card.querySelector("audio");
        const btn = card.querySelector(".play-btn");

        if(!audio || !btn) return;

        btn.addEventListener("click", () => {

            /* ⛔ Stop previous audio */
            if(currentAudio && currentAudio !== audio){
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentCard?.classList.remove("playing");
            }

            /* ▶️ Play / Pause toggle */
            if(audio.paused){
                audio.play();
                card.classList.add("playing");

                centerCard(card);   // 🔥 AUTO CENTER HERE

                currentAudio = audio;
                currentCard = card;
            }else{
                audio.pause();
                card.classList.remove("playing");
            }
        });

        /* ❌ Remove glow when audio ends */
        audio.addEventListener("ended", () => {
            card.classList.remove("playing");
            if(currentAudio === audio){
                currentAudio = null;
                currentCard = null;
            }
        });
    });


    /* ===============================
       ✨ LEFT STICKY TEXT — TYPING
    ================================= */

    const typingEl = document.querySelector(".recording-left p");

    if(typingEl){
        const fullText = typingEl.textContent.trim();
        typingEl.textContent = "";
        let i = 0;

        function typeText(){
            if(i < fullText.length){
                typingEl.textContent += fullText.charAt(i);
                i++;
                setTimeout(typeText, 40); // romantic slow speed
            }
        }

        typeText();
    }

});
