'use strict';
(function(){
  const header = document.getElementById('siteHeader');
  if(!header) return;
  let lastScrollY = window.scrollY;
  const delta = 10;
  const hideAfter = 80;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (Math.abs(currentY - lastScrollY) < delta) return;
    if (currentY > lastScrollY && currentY > hideAfter) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    lastScrollY = currentY;
  });
})();

