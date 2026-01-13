/* =========================================
   ROMANTIC CARD REVEAL ON SCROLL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".chat-card");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.25
        }
    );

    cards.forEach(card => observer.observe(card));
});
