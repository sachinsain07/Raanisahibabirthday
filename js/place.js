// SAFE BACK FUNCTION
function goBack(){
    window.history.back();
}



// place.js (OPTIONAL)
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".place-card");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
});



/* =========================================
   DYNAMIC ROMANTIC BACKGROUND – PLACES
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const gradients = [
        "radial-gradient(circle at top, #1a0000, #000 70%)",
        "radial-gradient(circle at top, #120014, #000 70%)",
        "radial-gradient(circle at top, #0f001a, #000 70%)",
        "radial-gradient(circle at top, #1a0010, #000 70%)",
        "radial-gradient(circle at top, #14001a, #000 70%)"
    ];

    let index = 0;

    setInterval(() => {
        document.body.style.background = gradients[index];
        index = (index + 1) % gradients.length;
    }, 7000); // slow romantic change
});
