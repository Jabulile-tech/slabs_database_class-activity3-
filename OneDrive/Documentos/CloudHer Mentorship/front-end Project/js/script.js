// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Floating web-dev icons/code snippets background
const symbols = ['</>', '{ }', ';', '#', 'const', 'function()', '<div>', '=>', '☁', '{ }', '01', 'git', 'API', '</>', 'npm'];
const bgContainer = document.getElementById('bgIcons');
const iconCount = 22;

for (let i = 0; i < iconCount; i++) {
  const el = document.createElement('span');
  el.className = 'bg-icon';
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const left = Math.random() * 100;
  const size = 0.9 + Math.random() * 1.6;
  const duration = 12 + Math.random() * 18;
  const delay = Math.random() * 20;

  el.style.left = `${left}vw`;
  el.style.fontSize = `${size}rem`;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay = `${delay}s`;

  bgContainer.appendChild(el);
}
