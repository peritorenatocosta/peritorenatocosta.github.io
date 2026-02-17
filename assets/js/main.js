(function () {
  const menuBtn = document.getElementById('menuBtn');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('menuCloseBtn');

  function openMenu() {
    overlay.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn && overlay) {
    menuBtn.addEventListener('click', openMenu);

    overlay.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.getAttribute && target.getAttribute('data-close') === 'true') closeMenu();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
      if (!overlay.hidden && e.key === 'Escape') closeMenu();
    });

    overlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }
})();
