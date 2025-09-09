  let bar = document.querySelector('#menu-bar');
  let bar2 = document.querySelector('.bar2');
  let cross = document.querySelector('#cross');

  bar.addEventListener('click', () => {
      bar2.style.display='flex';
  });

  cross.addEventListener('click', () => {
       bar2.style.display='none';
  });
// =================services start==================

gsap.from('.first-textarea > *', {
  x: -300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
    scrollTrigger: {
    trigger: '.first-textarea',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true,
  }
});


gsap.from('.first-textarea2 > *', {
  x: 300,
  opacity: 0,
  duration: 0.8,
  stagger:0.2,
    scrollTrigger: {
    trigger: '.first-textarea2',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true,
   
  }
});

gsap.from('.sec-textarea > *', {
  x: -300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
    scrollTrigger: {
    trigger: '.sec-textarea',
    scroller: 'body',
    start: 'top 70%',
    end: 'top 20%',
    scrub: true,
    
  }
});


gsap.from('.sec-textarea2 > *', {
  x: 300,
 opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".sec-textarea",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
    scrub: true,
  }
});

gsap.from('.text-start-one',{
    x:500,
    opacity:0,
    duration: 0.5,
    stagger:0.2,
   scrollTrigger:{
    trigger:'.text-start-one',
    scroller:'body',
    start:'top 60%',
    end:'top 20%',
    scrub:true, 
   }
})

gsap.from('.landing-page > *',{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.6,
})

gsap.from('.text2 > *',{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.9,
})



gsap.from(".text-start-two > *", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,   
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".text-start-two",
    scroller: "body",
    start: "top 80%",
   end:'top 20%',
 scrub:true,
  }
});

gsap.to("nav", {
  opacity: 1,
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  scrollTrigger: {
      trigger: 'nav',
    scroller: 'body',
    start: 'top -30%',
    end: 'bottom bottom',
    scrub: 2,
  }
});

const textrotated = document.querySelector('.text-rotated');
const textrotated2 = document.querySelector('.text-rotated2');
const ai = document.querySelector('.a-i');

function setColor(color, bg) {
  gsap.to([textrotated, textrotated2], { color: color, duration: 0.2 });
  gsap.to(ai, { color: color, backgroundColor: bg, duration: 0.2 });
}

// helper: check if a color is dark
function isDarkColor(rgb) {
  const match = rgb.match(/\d+/g);
  if (!match) return false;
  const [r, g, b] = match.map(Number);
  // brightness formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128; // below 128 = dark
}

document.querySelectorAll("section").forEach(section => {
  const style = window.getComputedStyle(section);
  const bg = style.backgroundColor;

  ScrollTrigger.create({
    trigger: section,
    start: "top bottom",   // when section enters viewport
    end: "bottom top",     // until it leaves
    onEnter: () => {
      if (isDarkColor(bg)) {
        setColor("#fff", "rgba(255,255,255,0.2)");
      } else {
        setColor("#000", "rgba(88,88,88,0.132)");
      }
    },
    onEnterBack: () => {
      if (isDarkColor(bg)) {
        setColor("#fff", "rgba(255,255,255,0.2)");
      } else {
        setColor("#000", "rgba(88,88,88,0.132)");
      }
    }
  });
});

