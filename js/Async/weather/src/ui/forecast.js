import { createIcon } from './currentWeather.js';

function createDayCard(day) {
    const card = document.createElement('div');
    card.classList.add('day-card');

    const date = document.createElement('h2');
    date.textContent = day.date;
    card.appendChild(date);

    const icon = createIcon(day.icon);
    card.appendChild(icon);

    const conditions = document.createElement('h2');
    conditions.textContent = day.conditions;
    card.appendChild(conditions);

    const cloudCover = document.createElement('p');
    const cloudCoverSpan = document.createElement('span');
    cloudCoverSpan.textContent = day.cloudCover + '%';
    cloudCover.appendChild(cloudCoverSpan);
    cloudCover.appendChild(document.createTextNode(' cloud cover'));
    card.appendChild(cloudCover);

    const humidity = document.createElement('p');
    const humiditySpan = document.createElement('span');
    humiditySpan.textContent = day.humidity + '%';
    humidity.appendChild(humiditySpan);
    humidity.appendChild(document.createTextNode(' humidity'));
    card.appendChild(humidity);

    const precipprob = document.createElement('p');
    const precipspan = document.createElement('span');
    precipspan.textContent = day.precipprob + '%';
    precipprob.appendChild(precipspan);
    precipprob.appendChild(
        document.createTextNode(' precipitation probability')
    );
    card.appendChild(precipprob);

    const tempmax = document.createElement('p');
    const tempmaxSpan = document.createElement('span');
    tempmaxSpan.textContent = day.tempmax + '°F';
    tempmax.appendChild(tempmaxSpan);
    tempmax.appendChild(document.createTextNode(' high'));
    card.appendChild(tempmax);

    const tempmin = document.createElement('p');
    const tempminSpan = document.createElement('span');
    tempminSpan.textContent = day.tempmin + '°F';
    tempmin.appendChild(tempminSpan);
    tempmin.appendChild(document.createTextNode(' low'));
    card.appendChild(tempmin);

    return card;
}

function createForecast(days) {
    // Carousel forecast
    const forecast = document.createElement('div');
    forecast.classList.add('forecast');

    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    forecast.appendChild(carousel);

    for (const day of days) {
        const dayCard = createDayCard(day);
        carousel.appendChild(dayCard);
    }

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    forecast.appendChild(buttons);

    const prevButton = document.createElement('button');
    prevButton.id = 'prev-button';
    prevButton.textContent = 'Prev';
    buttons.appendChild(prevButton);

    const backButton = document.createElement('button');
    backButton.id = 'back-to-home-button';
    backButton.textContent = 'Back';
    buttons.appendChild(backButton);

    const nextButton = document.createElement('button');
    nextButton.id = 'next-button';
    nextButton.textContent = 'Next';
    buttons.appendChild(nextButton);

    // Store carousel state and methods
    forecast.currentIndex = 0;
    forecast.totalDays = days.length;
    forecast.carousel = carousel;
    forecast.prevButton = prevButton;
    forecast.nextButton = nextButton;

    // Initialize carousel
    updateCarouselPosition(forecast);
    updateButtonStates(forecast);

    return forecast;
}

function updateCarouselPosition(forecast) {
    const translateX = -forecast.currentIndex * 100;
    forecast.carousel.style.transform = `translateX(${translateX}%)`;
}

function updateButtonStates(forecast) {
    forecast.prevButton.disabled = forecast.currentIndex === 0;
    forecast.nextButton.disabled =
        forecast.currentIndex === forecast.totalDays - 1;
}

function nextDay(forecast) {
    if (forecast.currentIndex < forecast.totalDays - 1) {
        forecast.currentIndex++;
        updateCarouselPosition(forecast);
        updateButtonStates(forecast);
    }
}

function prevDay(forecast) {
    if (forecast.currentIndex > 0) {
        forecast.currentIndex--;
        updateCarouselPosition(forecast);
        updateButtonStates(forecast);
    }
}

export { createDayCard, createForecast, nextDay, prevDay };
