const showButton = document.querySelector('[data-about="show-button"]');
const paragraph = document.querySelector('[data-about="more"]');
const paragraphMobile = document.querySelector('[data-about="more-mobile"]');

const displayToggle = (el, state, classId) => {
  if (el.classList.contains(classId)) {
    el.style.display = 'none';
    el.classList.remove(classId);
    return;
  }
  el.style.display = state;
  el.classList.add(classId);
  return;
};

const showAbout = (classId) => {

  if (paragraphMobile && window.matchMedia('(max-width: 767px)').matches) {
    displayToggle(paragraphMobile, 'inline', classId);
  }
  if (paragraphMobile && window.matchMedia('(min-width: 768px)').matches) {
    paragraphMobile.style.display = 'inline';
  }
  if (paragraph) {
    displayToggle(paragraph, 'block', classId);
  }
};

const buttonNameToggle = (classId) => {
  if (paragraphMobile.classList.contains(classId) || paragraph.classList.contains(classId)) {
    showButton.innerHTML = 'Свернуть';
    return;
  }
  showButton.innerHTML = 'Подробнее';
};

const initshowAbout = () => {
  if (showButton) {
    showButton.addEventListener('click', () => {
      const classId = 'is-open';

      showAbout(classId);
      buttonNameToggle(classId);
    });
    return;
  }
};

export { initshowAbout };
