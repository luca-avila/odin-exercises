import { getWeather } from '../api/weatherAPI';

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

function createCurrentDayCard(day) {
    const card = document.createElement('div');
    card.classList.add('current-day-card');

    const icon = createIcon(day.icon);
    card.appendChild(icon);

    const conditions = document.createElement('h2');
    conditions.textContent = day.conditions;
    card.appendChild(conditions);

    const temp = document.createElement('h2');
    temp.textContent = day.temp;
    card.appendChild(temp);

    const cloudCover = document.createElement('h2');
    cloudCover.textContent = day.cloudCover;
    card.appendChild(cloudCover);

    const humidity = document.createElement('h2');
    humidity.textContent = day.humidity;
    card.appendChild(humidity);

    const precipprob = document.createElement('h2');
    precipprob.textContent = day.precipprob;
    card.appendChild(precipprob);

    return card;
}

function createIcon(icon) {
    const iconElement = document.createElement('img');
    iconElement.classList.add('icon');

    try {
        iconElement.src = require(`../assets/icons/${icon}.svg`);
    } catch (error) {
        iconElement.src = require('../assets/icons/cloudy.svg');
    }

    return iconElement;
}

function createForm() {
    const form = document.createElement('form');
    form.id = 'weather-form';

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.id = 'city';
    cityInput.placeholder = 'Enter a city';
    form.appendChild(cityInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Get Weather';
    form.appendChild(submitButton);

    return form;
}

async function createHome(city) {
    const weather = await getWeather(city);
    const home = document.createElement('div');
    home.id = 'home';

    const cityName = document.createElement('h1');
    cityName.textContent = weather.resolvedAddress;
    home.appendChild(cityName);

    const currentDayCard = createCurrentDayCard(weather.currentConditions);
    home.appendChild(currentDayCard);

    const forecastButton = document.createElement('button');
    forecastButton.id = 'forecast-button';
    forecastButton.textContent = 'Forecast';
    home.appendChild(forecastButton);

    return home;
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
export { createForm, createHome, createForecast };
