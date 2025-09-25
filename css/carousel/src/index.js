import './style.css';

function createCarousel() {
  const container = document.createElement('div');
  container.classList.add('carousel');

  for (let i = 0; i < 5; i++) {
    const carouselItemImage = document.createElement('img');
    carouselItemImage.classList.add(`img-${i}`);
    carouselItemImage.dataset.index = i;
    carouselItemImage.src = `https://picsum.photos/200/30${i}`;
    carouselItemImage.alt = 'Carousel Item';
    container.appendChild(carouselItemImage);
  }

  return container;
}

function carouselLogic() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = carousel.querySelectorAll('img');
  let currentIndex = 0;
}

function getGridPosition(element) {
  const computedStyle = getComputedStyle(element);
  const gridRow = computedStyle.gridRow;
  const gridColumn = computedStyle.gridColumn;
  return { gridRow, gridColumn };
}

function addStyles() {
  const images = document.querySelectorAll('img');
}

document.body.appendChild(createCarousel());
const images = document.querySelectorAll('img');
for (let image of images) {
  console.log(getGridPosition(image));
}
