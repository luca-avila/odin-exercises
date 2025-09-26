import './style.css';

let state = {
  currentIndex: 0,
  totalImages: 5,
  images: [],
};

function createCarouselElements() {
  const container = document.createElement('div');
  container.classList.add('carousel');

  for (let i = 0; i < state.totalImages; i++) {
    const carouselItemImage = document.createElement('img');
    carouselItemImage.src = `https://picsum.photos/200/30${i}`;
    carouselItemImage.alt = 'Carousel Item';

    state.images.push(carouselItemImage);
  }

  return container;
}

function addImagesIndex(imagesArr) {
  for (let i = 0; i < state.totalImages; i++) {
    imagesArr[i].dataset.index = i;
  }
}

function moveStateIndex() {
  if (state.currentIndex === 4) {
    state.currentIndex = 0;
  } else {
    state.currentIndex++;
  }
}

function moveStateIndexBack() {
  if (state.currentIndex === 0) {
    state.currentIndex = 4;
  } else {
    state.currentIndex--;
  }
}

// Hide images to show only 3 images
function hideImages(imagesArr) {
  for (let image of imagesArr) {
    if (parseInt(image.dataset.index) > 2) {
      image.classList.add('hidden');
    }
  }
}

function expandIndexImage(imagesArr) {
  for (let image of imagesArr) {
    if (parseInt(image.dataset.index) === state.currentIndex) {
      image.classList.add('current-img');
    }
  }
}

function clearClasses(imagesArr) {
  for (let image of imagesArr) {
    // Remove CSS classes
    image.classList.remove('current-img');
    image.classList.remove('hidden');

    // Remove inline grid positioning styles
    image.style.gridColumnStart = '';
    image.style.gridColumnEnd = '';
    image.style.gridRowStart = '';
    image.style.gridRowEnd = '';
    image.style.order = '';
    image.style.gridColumn = '';
    image.style.gridRow = '';
  }
}

function positionIndexImage(imagesArr) {
  // Calculate previous and next indices
  const prevIndex = state.currentIndex === 0 ? 4 : state.currentIndex - 1;
  const nextIndex = state.currentIndex === 4 ? 0 : state.currentIndex + 1;

  for (let image of imagesArr) {
    const imageIndex = parseInt(image.dataset.index);

    if (imageIndex === prevIndex) {
      // Position previous image on the left (column 1)
      image.style.gridColumnStart = '1';
      image.style.gridColumnEnd = '2';
      image.style.gridRowStart = '1';
      image.style.gridRowEnd = '2';
    } else if (imageIndex === state.currentIndex) {
      // Position current image in the center (column 2)
      image.style.gridColumnStart = '2';
      image.style.gridColumnEnd = '3';
      image.style.gridRowStart = '1';
      image.style.gridRowEnd = '2';
    } else if (imageIndex === nextIndex) {
      // Position next image on the right (column 3)
      image.style.gridColumnStart = '3';
      image.style.gridColumnEnd = '4';
      image.style.gridRowStart = '1';
      image.style.gridRowEnd = '2';
    }
  }
}

function displayShownImages(imagesArr) {
  const carousel = document.querySelector('.carousel');

  // Calculate previous and next indices
  const prevIndex = state.currentIndex === 0 ? 4 : state.currentIndex - 1;
  const nextIndex = state.currentIndex === 4 ? 0 : state.currentIndex + 1;

  for (let image of imagesArr) {
    const imageIndex = parseInt(image.dataset.index);
    // Show only current, previous, and next images
    if (
      imageIndex === state.currentIndex ||
      imageIndex === prevIndex ||
      imageIndex === nextIndex
    ) {
      carousel.appendChild(image);
    }
  }
}

function carouselLoop(buttonType) {
  const carousel = document.querySelector('.carousel');
  carousel.innerHTML = '';
  displayShownImages(state.images);
  positionIndexImage(state.images);
  expandIndexImage(state.images);
}

function addButtons() {
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const previousButton = document.createElement('button');
  previousButton.textContent = 'Previous';
  previousButton.classList.add('previous');
  buttons.appendChild(previousButton);

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.classList.add('next');
  buttons.appendChild(nextButton);

  return buttons;
}

function addEventListeners() {
  const previousButton = document.querySelector('.previous');
  const nextButton = document.querySelector('.next');

  previousButton.addEventListener('click', () => {
    clearClasses(state.images);
    moveStateIndexBack();
    carouselLoop('previous');
    updateDots();
  });

  nextButton.addEventListener('click', () => {
    clearClasses(state.images);
    moveStateIndex();
    carouselLoop('next');
    updateDots();
  });
}

function displayDots() {
  for (let i = 0; i < state.totalImages; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.dataset.index = i;
    if (i === state.currentIndex) {
      dot.classList.add('active');
    }
    document.body.appendChild(dot);
  }
}

function updateDots() {
  for (let dot of document.querySelectorAll('.dot')) {
    dot.classList.remove('active');
  }
  document
    .querySelector(`.dot[data-index="${state.currentIndex}"]`)
    .classList.add('active');
}

const carousel = createCarouselElements();
document.body.appendChild(carousel);
document.body.appendChild(addButtons());
addEventListeners();

setTimeout(() => {
  addImagesIndex(state.images);
  displayShownImages(state.images);
  positionIndexImage(state.images);
  expandIndexImage(state.images);
  displayDots();
}, 1000);
