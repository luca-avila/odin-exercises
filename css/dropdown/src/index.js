import './style.css';

const dropDown = (function () {
  const container = document.createElement('div');
  container.classList.add('container');

  const dropDownButton = document.createElement('button');
  dropDownButton.textContent = 'Show menu';
  container.appendChild(dropDownButton);

  const optionsContainer = document.createElement('ul');
  optionsContainer.classList.add('optionsContainer');
  container.appendChild(optionsContainer);

  for (let i = 0; i < 5; i++) {
    const element = document.createElement('li');
    element.textContent = `Item${i}`;
    element.classList.add('element');
    optionsContainer.appendChild(element);
  }

  return container;
})();

function createListeners() {
  const dropButton = document.querySelector('button');
  const container = document.querySelector('.optionsContainer');

  dropButton.addEventListener('click', () => {
    if (dropButton.textContent === 'Show menu') {
      dropButton.textContent = 'Hide menu';
      container.classList.add('hidden');
    } else {
      dropButton.textContent = 'Show menu';
      container.classList.remove('hidden');
    }
    console.log(container);
  });
}

document.body.appendChild(dropDown);

createListeners();
