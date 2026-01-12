/* =========================================
   3D IMAGE CAROUSEL
   AUTO ROTATE + PAUSE + SWIPE + ACTIVE GLOW
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.getElementById("carousel");
    const wrapper = document.querySelector(".slider-wrapper");

    if(!carousel || !wrapper) return;

    const images = carousel.querySelectorAll("img");
    const total = images.length;
    const angle = 360 / total;
    let current = 0;

    let autoRotateTimer = null;
    let resumeTimer = null;

    /* ===== SET IMAGE POSITIONS ===== */
    images.forEach((img, i) => {
        img.style.transform =
            `rotateY(${i * angle}deg) translateZ(420px)`;
    });

    /* ===== ROTATE + ACTIVE IMAGE ===== */
    function rotateCarousel(){
        carousel.style.transform =
            `rotateY(${current * -angle}deg)`;

        // ❤️ Active image heartbeat
        images.forEach((img, i) => {
            img.classList.remove("active");

            const index = ((current % total) + total) % total;
            if(i === index){
                img.classList.add("active");
            }
        });
    }

    /* ===== SLIDE CONTROLS ===== */
    function nextSlide(){
        current++;
        rotateCarousel();
        pauseAutoRotate();
    }

    function prevSlide(){
        current--;
        rotateCarousel();
        pauseAutoRotate();
    }

    /* ===== ARROW BUTTONS ===== */
    document.getElementById("nextSlide")
        ?.addEventListener("click", nextSlide);

    document.getElementById("prevSlide")
        ?.addEventListener("click", prevSlide);

    /* ===== AUTO ROTATE ===== */
    function startAutoRotate(){
        if(autoRotateTimer) return;

        autoRotateTimer = setInterval(() => {
            current++;
            rotateCarousel();
        }, 3500);
    }

    function stopAutoRotate(){
        clearInterval(autoRotateTimer);
        autoRotateTimer = null;
    }

    function pauseAutoRotate(){
        stopAutoRotate();

        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
            startAutoRotate();
        }, 6000);
    }

    /* ===== MOBILE SWIPE ===== */
    let startX = 0;
    let endX = 0;

    wrapper.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
        pauseAutoRotate();
    });

    wrapper.addEventListener("touchend", e => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe(){
        const diff = startX - endX;

        if(diff > 50){
            nextSlide();     // swipe left
        }else if(diff < -50){
            prevSlide();     // swipe right
        }
    }

    /* ===== DESKTOP HOVER PAUSE ===== */
    wrapper.addEventListener("mouseenter", stopAutoRotate);
    wrapper.addEventListener("mouseleave", startAutoRotate);

    /* ===== TAP / CLICK PAUSE ===== */
    wrapper.addEventListener("mousedown", pauseAutoRotate);

    /* ===== INIT ===== */
    rotateCarousel();      // set first active image
    startAutoRotate();     // start animation

});
