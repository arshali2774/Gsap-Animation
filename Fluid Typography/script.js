const toggle = document.getElementById('toggleMode');
const container = document.querySelector('main');
const heading = document.querySelector('.heading');
const paragraphs = document.querySelectorAll('.paragraph');
const sun = document.getElementById('sun-image');
const moon = document.getElementById('moon-image');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    container.style.backgroundColor = '#171717';
    heading.style.color = '#c7c6c6';
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = '#c7c6c6';
    });
    sun.classList.add('animate');
    moon.classList.remove('animate');
    moon.style.transform = 'scale(0)';
  } else {
    container.style.backgroundColor = '#c7c6c6';
    heading.style.color = '#171717';
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = '#171717';
    });
    moon.classList.add('animate');
    sun.classList.remove('animate');
  }
});
