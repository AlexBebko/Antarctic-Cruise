import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {checkSupport} from './modules/modals/check-webp-support';
import {checkJs} from './utils/is-js-check';
import {addBurgerMenuToggle} from './modules/modals/burger-menu';
import {makeMaskForPhoneInputs} from './modules/modals/phone-mask';
import {scrollToBlock} from './modules/modals/scroll-to-block';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  checkJs();

  // Modules
  // ---------------------------------
  checkSupport();
  addBurgerMenuToggle();
  makeMaskForPhoneInputs();
  scrollToBlock();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});
