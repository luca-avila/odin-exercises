async function getWeather(city) {
    const API_KEY = process.env.VITE_WEATHER_API_KEY;
    const route = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;
    const response = await fetch(route);
    const weather = await response.json();

    return formatJSON(weather);
}

function formatJSON(json) {
    const weatheObj = {
        resolvedAddress: json['resolvedAddress'],
        currentConditions: {
            conditions: json['currentConditions']['conditions'],
            cloudCover: json['currentConditions']['cloudcover'],
            humidity: json['currentConditions']['humidity'],
            temp: json['currentConditions']['temp'],
            precipprob: json['currentConditions']['precipprob'],
            icon: json['currentConditions']['icon'],
        },
        forecast: {
            days: json['days'].map(day => formatDay(day)),
        },
    };
    return weatheObj;
}

function formatDay(day) {
    const dayObj = {
        date: day['datetime'],
        conditions: day['conditions'],
        cloudCover: day['cloudcover'],
        humidity: day['humidity'],
        precipprob: day['precipprob'],
        tempmax: day['tempmax'],
        tempmin: day['tempmin'],
        icon: day['icon'],
    };
    return dayObj;
}

export { getWeather };
