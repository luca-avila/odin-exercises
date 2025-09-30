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

    const cloudCover = document.createElement('h2');
    cloudCover.textContent = day.cloudCover;
    card.appendChild(cloudCover);

    const humidity = document.createElement('h2');
    humidity.textContent = day.humidity;
    card.appendChild(humidity);

    const precipprob = document.createElement('h2');
    precipprob.textContent = day.precipprob;
    card.appendChild(precipprob);

    const tempmax = document.createElement('h2');
    tempmax.textContent = day.tempmax;
    card.appendChild(tempmax);

    const tempmin = document.createElement('h2');
    tempmin.textContent = day.tempmin;
    card.appendChild(tempmin);

    return card;
}

function createForecast(days) {
    const forecast = document.createElement('div');
    forecast.id = 'forecast';

    for (const day of days) {
        const dayCard = createDayCard(day);
        forecast.appendChild(dayCard);
    }
    return forecast;
}

export { createDayCard, createForecast };
