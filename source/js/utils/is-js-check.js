const noJsElement = document.querySelector('.no-js');


function checkJs() {
  if (noJsElement) {
    noJsElement.classList.remove('no-js');
  }
}

export {checkJs};
