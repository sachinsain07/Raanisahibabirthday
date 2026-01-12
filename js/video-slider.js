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
