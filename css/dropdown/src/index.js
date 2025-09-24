const dropDown = (function () {
  const container = document.createElement('div');
  container.classList.add('container');

  const dropDownButton = document.createElement('button');
  dropDownButton.classList.add('drop-button');
  container.appendChild(dropDownButton);

  const optionsContainer = document.createElement('ul');
  optionsContainer.classList.add('optionsContainer');
  container.appendChild(optionsContainer);

  for (let i = 0; i < 5; i++) {
    const element = document.createElement('li');
    element.classList.add('element');
    optionsContainer.appendChild(element);
  }

  return container;
})();

document.body.appendChild(dropDown);
