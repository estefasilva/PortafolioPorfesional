
window.onload = function() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(function(item, index) {
    setTimeout(function() {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 300);
  });
};
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

