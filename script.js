// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList   = document.getElementById('navList');

navToggle?.addEventListener('click', () => navList.classList.toggle('show'));
navList?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('show')));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active-link');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active-link');
  });
});

// Scroll-reveal
const revealEls = document.querySelectorAll(
  '.service-card, .port-card, .about-feature, .glance-item, .exp-card, .skill-bar-item, .competency-list span, .contact-item'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('active'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form stub
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Message sent!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}