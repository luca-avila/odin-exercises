import { getWeather } from '../api/weatherAPI';

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

export { createCurrentDayCard, createHome, createIcon };
