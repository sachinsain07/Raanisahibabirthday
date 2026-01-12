/* =========================================
   🎬 FAV TIME — CINEMATIC STAGE CONTROLLER
   - Auto reveal on scroll
   - Background color change per stage
   - Emotional ending reveal
   - Mobile safe
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const stages = document.querySelectorAll(".stage");
    const endSection = document.querySelector(".end-memories");

    if(!stages.length) return;

    /* 🌈 Romantic background colors per stage */
    const bgColors = [
        "radial-gradient(circle at top, #1a0000, #000 70%)",
        "radial-gradient(circle at top, #12001a, #000 70%)",
        "radial-gradient(circle at top, #00121a, #000 70%)",
        "radial-gradient(circle at top, #1a0012, #000 70%)",
        "radial-gradient(circle at top, #0f001a, #000 70%)",
        "radial-gradient(circle at top, #001a14, #000 70%)",
        "radial-gradient(circle at top, #1a0f00, #000 70%)",
        "radial-gradient(circle at top, #14001a, #000 70%)",
        "radial-gradient(circle at top, #00101a, #000 70%)",
        "radial-gradient(circle at top, #1a0010, #000 70%)"
    ];

    const isMobile = window.innerWidth <= 600;

    /* =========================================
       👁️ STAGE OBSERVER
    ========================================= */

    const stageObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const stage = entry.target;

                    stage.classList.add("show");

                    const index = [...stages].indexOf(stage);
                    document.body.style.background =
                        bgColors[index % bgColors.length];
                }
            });
        },
        {
            threshold: isMobile ? 0.15 : 0.35
        }
    );

    stages.forEach(stage => stageObserver.observe(stage));

    /* =========================================
       💗 EMOTIONAL END OBSERVER
    ========================================= */

    if(endSection){
        const endObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){

                        /* Reveal ending */
                        endSection.classList.add("show");   

                        /* Soft final background */
                        document.body.style.background =
                            "radial-gradient(circle at top, #120008, #000 75%)";
                    }
                });
            },
            {
                threshold: 0.25
            }
        );

        endObserver.observe(endSection);
    }

});
