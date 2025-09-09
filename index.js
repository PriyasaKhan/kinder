gsap.from('.landing > *',{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.6,
})

gsap.from('.text2 > *',{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})

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

gsap.from('.first-photo ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.first-photo',
    scroller: 'body',
start: "top 80%",
end: "top 70%", 
 scrub:true,
  }
});
gsap.from('.first-dis ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.first-dis',
    scroller: 'body',
start: "top 80%",
end: "top 70%", 
 scrub:true,
  }
});


gsap.from('.second-headline h2 ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.second-headline h2',
    scroller: 'body',
start: "top 80%",
end: "top 70%", 

 scrub:true,
  }
});


gsap.from('.second-para ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.second-para',
    scroller: 'body',
start: "top 90%",
end: "top 80%", 

 scrub:true,
  }
});

gsap.from('.read-more ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.read-more',
    scroller: 'body',
start: "top 90%",
end: "top 80%",  



 scrub:true,
  }
});
gsap.from('.sec-photo ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.sec-photo',
    scroller: 'body',
start: "top 80%",
end: "top 70%", 
 scrub:true,
  }
});

gsap.from('.sec-dis ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.sec-dis',
    scroller: 'body',
start: "top 80%",
end: "top 70%", 
 scrub:true,
  }
});


gsap.from('.second-headline2 h2 ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.second-headline2 h2',
    scroller: 'body',
start: "top 80%",
end: "top 70%", 

 scrub:true,
  }
});


gsap.from('.second-para2 ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.second-para2',
    scroller: 'body',
start: "top 90%",
end: "top 80%", 

 scrub:true,
  }
});

gsap.from('.read-more2 ',{
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger:{
    trigger: '.read-more2',
    scroller: 'body',
start: "top 90%",
end: "top 60%",  
 scrub:true,
  }
});

gsap.from('.team-left-side > *', {
  x: -200,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.team-left-side',
    scroller: 'body',
    start: "top 60%",      
    end: "top 20%",         
    scrub: 1,              

  }
});
gsap.from('.team-discover-headline > *', {
  x: -200,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.team-discover-headline',
    scroller: 'body',
    start: "top 60%",      
    end: "top 20%",         
    scrub: 1,              
  
  }
});

gsap.from('.left-side > *', {
  x: -200,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.left-side',
    scroller: 'body',
    start: "top 80%",      
    end: "top 20%",         
    scrub: 1,              
  }
});
gsap.from('.discover-headline > *', {
  x: -200,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.discover-headline',
    scroller: 'body',
    start: "top 60%",      
    end: "top 20%",         
    scrub: 1,              
  }
});

gsap.from('.first-img ', {
  y: -200,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.first-img ',
    scroller: 'body',
     start: "top 70%",      
    end: "top 40%",         
    scrub: 1,              
  }
});
gsap.from('.sec-img', {
  y: 100,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.sec-img',
    scroller: 'body',
      start: "top 90%",      
    end: "top 40%",         
    scrub: 1,             
  }
});

gsap.from('.third-img ', {
  y: 100,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.third-img ',
    scroller: 'body',
      start: "top 90%",      
    end: "top 60%",        
    scrub: 1,              
  }
});
gsap.from('.forth-img', {
  y: -200,
  opacity: 0,
  duration: 1.2,           
  stagger: 0.3,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: '.forth-img',
    scroller: 'body',
     start: "top 90%",      
    end: "top 40%",        
    scrub: 1,             
  }
});

gsap.from('.review-gap', {
  y: -100,
  opacity: 0,
  duration: 0.6,
  stagger: {
    each: 0.1,
    from: "center"
  },
  ease: "power2.out",
  scrollTrigger: {
    trigger: '.review-gap',   
    scroller: 'body',          
    start: 'top 80%',           
    end: 'top 50%',             
    scrub: 1,                              
  }
});
gsap.to("nav", {
  opacity: 1,
  backgroundColor: " rgba(5, 5, 5, 0.9)",
  scrollTrigger: {
      trigger: 'nav',
    scroller: 'body',
    start: 'top -30%',
    end: 'bottom bottom',
    scrub: 2,
  }
});

  let bar = document.querySelector('#menu-bar');
  let bar2 = document.querySelector('.bar2');
  let cross = document.querySelector('#cross');

  bar.addEventListener('click', () => {
      bar2.style.display='flex';
  });

  cross.addEventListener('click', () => {
       bar2.style.display='none';
  });


// let landing = document.querySelector('.landing ');
// let uniqueidea = document.querySelector('.unique-idea ');
// let textrotated= document.querySelector('.text-rotated ');
// let textrotated2 = document.querySelector('.text-rotated2 ');
// let ai = document.querySelector('.a-i ');

// landing.addEventListener('mouseenter',()=>{
//   textrotated.style.color='white';
//   textrotated2.style.color='white';
//   ai.style.color='white';
// });
// landing.addEventListener('mouseleave',()=>{
//   textrotated.style.color='black';
//   textrotated2.style.color='black';
//   ai.style.color='black';
// });


// uniqueidea.addEventListener('mouseenter',()=>{
//   textrotated.style.color='white';
//   textrotated2.style.color='white';
//   ai.style.color='white';
// });
// uniqueidea.addEventListener('mouseleave',()=>{
//   textrotated.style.color='black';
//   textrotated2.style.color='black';
//   ai.style.color='black';
// });


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




