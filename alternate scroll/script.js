const main = document.querySelector('main');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: main,
    scrub: false,
    pin: false,
    start: 'top top',
    end: 'bottom bottom',
  },
});

gsap.fromTo(
  '#col-1',
  { y: -3000 },
  {
    y: 2000,
    ease: 'none',
    duration: 2,
    scrollTrigger: {
      trigger: 'main',
      start: 'top center',
      end: '+=3000',
      scrub: true,
    },
  }
);
gsap.fromTo(
  '#col-2',
  { y: 50 },
  {
    y: -2000,
    ease: 'none',
    duration: 2,
    scrollTrigger: {
      trigger: 'main',
      start: 'top center',
      end: '+=3000',
      scrub: true,
    },
  }
);
gsap.fromTo(
  '#col-3',
  { y: -3000 },
  {
    y: 2000,
    ease: 'none',
    duration: 2,
    scrollTrigger: {
      trigger: 'main',
      start: 'top center',
      end: '+=3000',
      scrub: true,
    },
  }
);
gsap.fromTo(
  '#col-4',
  { y: 50 },
  {
    y: -2000,
    ease: 'none',
    duration: 2,
    scrollTrigger: {
      trigger: 'main',
      start: 'top center',
      end: '+=3000',
      scrub: true,
    },
  }
);
