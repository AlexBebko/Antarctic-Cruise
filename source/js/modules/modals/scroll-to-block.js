function scrollToBlock() {
  const anchorElements = document.querySelectorAll('[data-scroll-to-block]');

  if (anchorElements) {
    anchorElements.forEach((anchor) => {
      anchor.addEventListener('click', (evt) => {
        evt.preventDefault();
        let href = anchor.getAttribute('href');

        const scrollTarget = document.querySelector(href);
        if (scrollTarget) {
          scrollTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }
}

export {scrollToBlock};
