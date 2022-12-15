function addBurgerMenuToggle() {
  let mainHeaderElement = document.querySelector('.main-header__wrapper');
  let headerToggleElement = document.querySelector('.main-header__toggle');

  if (mainHeaderElement && headerToggleElement) {
    mainHeaderElement.classList.add('is-closed');

    headerToggleElement.addEventListener('click', function () {
      if (mainHeaderElement.classList.contains('is-closed')) {
        mainHeaderElement.classList.remove('is-closed');
        mainHeaderElement.classList.add('is-opened');
      } else {
        mainHeaderElement.classList.add('is-closed');
        mainHeaderElement.classList.remove('is-opened');
      }
    });
  }
}

export {addBurgerMenuToggle};
