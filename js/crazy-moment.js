/* =================================
   🌌 STAR‑DUST TRAIL EFFECT
================================= */
function createStarDust(x, y){
  for(let i=0;i<8;i++){
    const star = document.createElement("span");
    star.className = "star-dust";

    star.style.left =
      x + (Math.random()-0.5)*40 + "px";
    star.style.top =
      y + (Math.random()-0.5)*40 + "px";

    document.body.appendChild(star);
    setTimeout(()=>star.remove(),1200);
  }
}



document.addEventListener("DOMContentLoaded", () => {

  const slider = document.querySelector(".video-slider");
  const slides = document.querySelectorAll(".video-slide");
  const left = document.querySelector(".arrow.left");
  const right = document.querySelector(".arrow.right");

  let index = 0;
  let startX = 0;

  /* 🌈 Romantic moods */
  const moods = [
    {
      bg:"radial-gradient(circle at top, #3a002f, #000 70%)",
      speed:"3.8s" // calm
    },
    {
      bg:"radial-gradient(circle at top, #4a0038, #000 70%)",
      speed:"3.2s" // romantic
    },
    {
      bg:"radial-gradient(circle at top, #5a0026, #000 70%)",
      speed:"2.6s" // intense
    },
    {
      bg:"radial-gradient(circle at top, #2b0033, #000 70%)",
      speed:"4.2s" // soft
    }
  ];

  const romanticWords = [
    "Bubbbu 💖",
    "Jaan 💘",
    "Sweetu 💞",
    "Meri Raani👑",
    "Mera Bachha 🥰",
    "Meri Hotttty 🫠"
    
  ];

  /* =================================
     🎥 ACTIVE SLIDE + MOOD HANDLER
  ================================= */
  function setActiveSlide(){
    slides.forEach((slide,i)=>{
      slide.classList.toggle("active", i === index);

      /* 🎧 Stop audio of non‑active iframe */
      if(i !== index){
        const iframe = slide.querySelector("iframe");
        iframe.src = iframe.src;
      }
    });

    /* 🌈 Apply mood */
    const mood = moods[index % moods.length];
    document.body.style.background = mood.bg;

    slides[index].style.setProperty(
      "--heart-speed",
      mood.speed
    );

    /* 🎥 Auto‑center active slide */
    const active = slides[index];
    const sliderRect = slider.getBoundingClientRect();
    const slideRect = active.getBoundingClientRect();

    const offset =
      slideRect.left
      - sliderRect.left
      - sliderRect.width/2
      + slideRect.width/2;

    slider.scrollBy({
      left:offset,
      behavior:"smooth"
    });
  }

  /* =================================
     ARROWS
  ================================= */
  right.onclick = (e) => {
  if(index < slides.length - 1){
    createStarDust(e.clientX, e.clientY);
    index++;
    setActiveSlide();
  }
};

left.onclick = (e) => {
  if(index > 0){
    createStarDust(e.clientX, e.clientY);
    index--;
    setActiveSlide();
  }
};


  /* =================================
     📱 SWIPE SUPPORT
  ================================= */
 slider.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  const diff = startX - endX;

  if(diff > 50 && index < slides.length - 1){
    createStarDust(endX, endY);
    index++;
    setActiveSlide();
  } 
  else if(diff < -50 && index > 0){
    createStarDust(endX, endY);
    index--;
    setActiveSlide();
  }
});


  /* =================================
     ✨ FLOATING ROMANTIC WORDS
  ================================= */
  function floatingWord(){
    const span = document.createElement("span");
    span.textContent =
      romanticWords[Math.floor(Math.random()*romanticWords.length)];

    span.style.position = "fixed";
    span.style.left = Math.random()*100 + "vw";
    span.style.bottom = "-40px";
    span.style.fontSize = "14px";
    span.style.opacity = 0.7;
    span.style.color = "#ffb6ff";
    span.style.pointerEvents = "none";
    span.style.zIndex = 5;

    document.body.appendChild(span);

    span.animate([
      { transform:"translateY(0)", opacity:0.7 },
      { transform:"translateY(-120vh)", opacity:0 }
    ],{
      duration:14000,
      easing:"linear"
    });

    setTimeout(()=>span.remove(),14000);
  }

  setInterval(floatingWord, 2200);

  /* INIT */
  setActiveSlide();

});




function goBack(){
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 800);
}