function addBurgerMenuToggle() {
  const bodyElement = document.querySelector('body');

  const mainHeaderElement = document.querySelector('.main-header__wrapper');
  const headerToggleElement = document.querySelector('.main-header__toggle');
  const mainHeaderLinks = document.querySelectorAll('.main-nav__link');

  function openBurgerMenu() {
    mainHeaderElement.classList.remove('is-closed');
    mainHeaderElement.classList.add('is-opened');
    bodyElement.classList.add('scroll-lock');

    mainHeaderLinks.forEach((link) => {
      link.addEventListener('click', closeBurgerMenu);
    });

    bodyElement.addEventListener('click', onOutsideModalClick);
  }

  function closeBurgerMenu() {
    mainHeaderElement.classList.add('is-closed');
    mainHeaderElement.classList.remove('is-opened');
    bodyElement.classList.remove('scroll-lock');

    mainHeaderLinks.forEach((link) => {
      link.removeEventListener('click', closeBurgerMenu);
    });

    bodyElement.removeEventListener('click', onOutsideModalClick);
  }

  function onOutsideModalClick(evt) {
    const isClickInside = mainHeaderElement.contains(evt.target);

    if (!isClickInside) {
      closeBurgerMenu();
    }
  }

  if (mainHeaderElement && headerToggleElement) {
    mainHeaderElement.classList.add('is-closed');

    headerToggleElement.addEventListener('click', function () {
      if (mainHeaderElement.classList.contains('is-closed')) {
        openBurgerMenu();
      } else {
        closeBurgerMenu();
      }
    });
  }
}

export {addBurgerMenuToggle};
