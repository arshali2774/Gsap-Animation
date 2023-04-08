const parent = document.getElementById('parent');
const child = document.getElementById('child');

gsap.fromTo(
  child,
  { y: '-100%' },
  {
    y: '0%',
    ease: 'none',
    duration: 2,
    scrollTrigger: {
      trigger: parent,
      start: 'top center',
      scrub: true,
    },
  }
);
