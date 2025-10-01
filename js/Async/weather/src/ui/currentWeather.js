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
    temp.textContent = day.temp + '°F';
    card.appendChild(temp);

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

    return card;
}

function createHome(weather) {
    const home = document.createElement('div');
    home.id = 'home';

    const cityName = document.createElement('h1');
    cityName.textContent = weather.resolvedAddress;
    home.appendChild(cityName);

    const timezone = document.createElement('p');
    timezone.textContent = weather.timezone;
    home.appendChild(timezone);

    const currentDayCard = createCurrentDayCard(weather.currentConditions);
    home.appendChild(currentDayCard);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    home.appendChild(buttons);

    const forecastButton = document.createElement('button');
    forecastButton.id = 'forecast-button';
    forecastButton.textContent = 'Forecast';
    buttons.appendChild(forecastButton);

    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.textContent = 'Back';
    buttons.appendChild(backButton);

    return home;
}

export { createCurrentDayCard, createHome, createIcon };
