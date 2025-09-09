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

gsap.utils.toArray(".display1 > div").forEach((box) => {
  gsap.from(box, {
    x:300,    
    opacity: 0,
    duration: 1,
   ease: "power2.out",
    scrollTrigger: {
      trigger: box,
      scroller: "body",
start: "top 80%",
end: "top 60%",
      scrub: 1,
    }
  });
});




gsap.from('.categori-first-photo',{
    x:-300,
    opacity:0,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:'.categori-first-photo',
        scroller:'body',
        start:'top 65%',
        end:'top 20%',
        scrub:true,
       
    }

})
gsap.from('.categori-sec-photo',{
    x:-300,
    opacity:0,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:'.categori-sec-photo',
        scroller:'body',
        start:'top 65%',
        end:'top 20%',
        scrub:true,
        
    }

})
gsap.from('.categori-third-photo',{
    x:-300,
    opacity:0,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:'.categori-third-photo',
        scroller:'body',
        start:'top 65%',
        end:'top 20%',
        scrub:true,
        
    }

})
gsap.from('.categori-forth-photo',{
    x:-300,
    opacity:0,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:'.categori-forth-photo',
        scroller:'body',
        start:'top 65%',
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

gsap.to("nav", {
  opacity: 1,
  backgroundColor: "rgba(255, 255, 255, 0.355)",
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
