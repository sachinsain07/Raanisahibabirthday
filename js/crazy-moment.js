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
