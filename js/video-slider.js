const slides = document.querySelectorAll(".video-slide");
const next = document.querySelector(".arrow.right");
const prev = document.querySelector(".arrow.left");

let current = 0;

/* 🔒 Pause all videos */
function pauseAllVideos(){
    document.querySelectorAll("video").forEach(v => {
        v.pause();
    });
}

/* 🎬 Show selected slide */
function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.remove("active");

        const video = slide.querySelector("video");
        video.pause();
        video.currentTime = 0;

        if(i === index){
            slide.classList.add("active");
        }
    });
}

/* ➡️ Next */
next.addEventListener("click", ()=>{
    pauseAllVideos();
    current = (current + 1) % slides.length;
    showSlide(current);
});

/* ⬅️ Previous */
prev.addEventListener("click", ()=>{
    pauseAllVideos();
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

/* ▶️ Ensure only ONE video plays at a time (manual play also) */
document.querySelectorAll("video").forEach(video => {
    video.addEventListener("play", () => {
        document.querySelectorAll("video").forEach(v => {
            if(v !== video){
                v.pause();
            }
        });
    });
});

/* =========================================
   VIDEO PAGE — FULLSCREEN SLIDER LOGIC
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll(".video-slide video");
    const slides = document.querySelectorAll(".video-slide");

    let currentIndex = 0;

    /* -----------------------------------------
       SHOW SLIDE
    ----------------------------------------- */
    function showSlide(index){
        if(index < 0) index = slides.length - 1;
        if(index >= slides.length) index = 0;

        // hide all
        slides.forEach((slide, i) => {
            slide.classList.remove("active");

            const v = slide.querySelector("video");
            if(v){
                v.pause();
                v.currentTime = 0;
            }
        });

        // show current
        slides[index].classList.add("active");
        currentIndex = index;
    }

    showSlide(currentIndex);

    /* -----------------------------------------
       ARROWS
    ----------------------------------------- */
    const nextBtn = document.querySelector(".arrow.right");
    const prevBtn = document.querySelector(".arrow.left");

    if(nextBtn){
        nextBtn.addEventListener("click", () => {
            showSlide(currentIndex + 1);
        });
    }

    if(prevBtn){
        prevBtn.addEventListener("click", () => {
            showSlide(currentIndex - 1);
        });
    }

    /* -----------------------------------------
       ONLY ONE VIDEO CAN PLAY
    ----------------------------------------- */
    videos.forEach(video => {
        video.addEventListener("play", () => {
            videos.forEach(v => {
                if(v !== video){
                    v.pause();
                }
            });
        });
    });

});


/* =========================================
   BACK TO GALLERY (SAME AS AUDIO PAGE)
========================================= */

function goBack(){
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 800);
}

