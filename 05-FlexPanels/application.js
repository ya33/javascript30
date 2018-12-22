const panels = document.querySelectorAll('.panel');

const removeClasses = () => {
  panels.forEach((panel) => panel.classList = 'panel');
};

const openPanel = (event) => {
  // removeClasses();
  event.currentTarget.classList.toggle('open');
};

const displayText = (event) => {
  if (event.propertyName.includes('flex')) {
    event.target.classList.toggle('open-active');
  }
};

panels.forEach((panel) => {
  panel.addEventListener('click', openPanel)
});
panels.forEach((panel) => {
  panel.addEventListener('transitionend', displayText)
});
