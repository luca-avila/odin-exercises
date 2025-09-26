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
  for (let image of imagesArr) {
    if (parseInt(image.dataset.index) === state.currentIndex) {
      image.style.gridColumnStart = '2';
      image.style.gridColumnEnd = '3';
      image.style.gridRowStart = '1';
      image.style.gridRowEnd = '2';
    }
  }
}

function displayShownImages(imagesArr) {
  const carousel = document.querySelector('.carousel');

  for (let image of imagesArr) {
    const imageIndex = parseInt(image.dataset.index);

    // Show only the current image and the 2 adjacent ones
    if (
      Math.abs(imageIndex - state.currentIndex) <= 1 ||
      (state.currentIndex === 0 && imageIndex === 4) ||
      (state.currentIndex === 4 && imageIndex === 0)
    ) {
      carousel.appendChild(image);
    }
  }
}

const carousel = createCarouselElements();
document.body.appendChild(carousel);

function startCarousel() {
  addImagesIndex(state.images);

  function carouselLoop(iterationCount = 0) {
    if (iterationCount >= 10) return;
    const carousel = document.querySelector('.carousel');
    carousel.innerHTML = '';
    displayShownImages(state.images);
    positionIndexImage(state.images);
    expandIndexImage(state.images);
    setTimeout(() => {
      clearClasses(state.images);
      moveStateIndex();
      carouselLoop(iterationCount + 1);
    }, 4000);
  }

  carouselLoop();
}

setTimeout(() => {
  startCarousel();
}, 1000);
