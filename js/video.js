function goBack(){
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 800);
}
