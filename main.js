// ─── Scroll Reveal ───────────────────────────────────────────────────────────
// Observes all elements with the .reveal class and adds .visible when they
// enter the viewport, triggering the CSS fade-up transition defined in styles.css

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));