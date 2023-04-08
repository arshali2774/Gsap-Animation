const section = document.querySelector('.s-2');
const card = document.querySelector('.card');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    scrub: false,
    pin: false,
    start: 'top top',
    end: 'bottom bottom',
  },
});

// gsap.from(section, {
//   opacity: 0,
//   y: 200,
// });

gsap.from('.card', {
  duration: 0.5,
  scale: 0.5,
  y: 500,
  //   x: 0,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: 'section',
    start: 'bottom center',
    // toggleActions: 'restart none  none none',
  },
});

gsap.set('.card', {
  transformStyle: 'preserve-3d',
  transformPerspective: 1000,
});
gsap.to('.card-1', {
  //   delay: 0.5,
  //   duration: 0.6,
  //   x: -200,
  //   scale: 0.9,
  //   rotateY: 30,
  //   x: 0,
  //   ease: 'back.out(1.7)',
  boxShadow: '0px 100px 100px 30px rgba(0,0,0,.4)',
  scrollTrigger: {
    trigger: 'section',
    start: 'bottom center',
    // toggleActions: 'restart none  none none',
  },
});
gsap.to('.card-2', {
  delay: 0.5,
  duration: 0.5,
  x: -200,
  scale: 0.9,
  rotateY: 30,
  boxShadow: '0px 100px 100px 30px rgba(0,0,0,.4)',
  //   x: 0,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: 'section',
    start: 'bottom center',
    // toggleActions: 'restart none  none none',
  },
});
gsap.to('.card-3', {
  delay: 0.5,
  duration: 0.5,
  x: 200,
  scale: 0.9,
  rotateY: -30,
  boxShadow: '0px 100px 100px 30px rgba(0,0,0,.4)',
  //   x: 0,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: 'section',
    start: 'bottom center',
    // toggleActions: 'restart none  none none',
  },
});

gsap.to('.card-4', {
  delay: 1,
  duration: 0.5,
  x: -400,
  scale: 0.8,
  rotateY: 30,
  boxShadow: '0px 100px 100px 30px rgba(0,0,0,.4)',
  //   x: 0,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: 'section',
    start: 'bottom center',
    // toggleActions: 'restart none  none none',
  },
});

gsap.to('.card-5', {
  delay: 1,
  duration: 0.5,
  x: 400,
  scale: 0.8,
  rotateY: -30,
  boxShadow: '0px 100px 100px 30px rgba(0,0,0,.4)',
  //   x: 0,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: 'section',
    start: 'bottom center',
    // toggleActions: 'restart none none none',
  },
});
