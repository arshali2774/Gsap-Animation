const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

// lenis.on('scroll', (e) => {
//   console.log(e);
// });

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById('vertical');
const col_left = document.querySelector('.col_left');
const tl = gsap.timeline({ paused: true });

tl.fromTo(col_left, { y: 0 }, { y: '170vh', duration: 1, ease: 'none' }, 0);

const scroll_1 = ScrollTrigger.create({
  animation: tl,
  trigger: section_1,
  start: 'top top',
  end: 'bottom center',
  scrub: true,
});

const section_2 = document.getElementById('horizontal');
let box_items = gsap.utils.toArray('.horizontal__item');

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: 'sine.out',
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: '+=' + section_2.offsetWidth,
  },
});
