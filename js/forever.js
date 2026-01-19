/* Romantic BG */
const layer = document.getElementById("romanticLayer");
const emojis = ["💖","💘","🤍","🥀","✨","💫","♾️"];

function createLove(){
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*100 + "vw";
    span.style.fontSize = (16 + Math.random()*14) + "px";
    span.style.animationDuration = (18 + Math.random()*14) + "s";
    layer.appendChild(span);
    setTimeout(()=>span.remove(),32000);
}
setInterval(createLove,1800);

/* Answer logic */
function answer(btn,text){
    const card = btn.closest(".question-card");
    card.querySelector(".result").innerHTML = text;
}

function goBack(){
    window.location.href="gallery.html";
}



/* =================================
💍 FINAL PROPOSAL LOGIC
================================= */

function showProposal(name){

  const screen = document.getElementById("proposalScreen");
  const nameHolder = document.getElementById("herName");

  nameHolder.textContent = name || "My Love";
  screen.classList.add("show");

  startFireworks();
}

/* 🎆 FIREWORKS */
function startFireworks(){

  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createExplosion(x,y){
    for(let i=0;i<80;i++){
      particles.push({
        x,y,
        vx:(Math.random()-0.5)*6,
        vy:(Math.random()-0.5)*6,
        life:100
      });
    }
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
      p.x+=p.vx;
      p.y+=p.vy;
      p.life--;
      ctx.fillStyle="rgba(255,150,200,.8)";
      ctx.fillRect(p.x,p.y,3,3);
      if(p.life<=0) particles.splice(i,1);
    });
    requestAnimationFrame(animate);
  }

  animate();

  setInterval(()=>{
    createExplosion(
      Math.random()*canvas.width,
      Math.random()*canvas.height/2
    );
  },900);
}




/* =================================
💍 FINAL FOREVER ANSWER HANDLER
================================= */
function finalAnswer(btn){

  // 1️⃣ Pehle normal answer show ho
  answer(btn, "Haan… main tumhari zindagi banna chahti hoon ♾️❤️");

  // 2️⃣ Thoda pause — emotion sink hone do
  setTimeout(() => {
    showProposal("Raani Sahiba");
  }, 2000); // 2s = perfect timing
}


