
window.onload = function() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(function(item, index) {
    setTimeout(function() {
      item.classList.add('mostrar');
    }, index * 300); // uno por uno
  });
};


