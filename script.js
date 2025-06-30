
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach(el => {
  appearOnScroll.observe(el);
});
