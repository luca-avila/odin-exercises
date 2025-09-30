import { getWeather } from '../api/weatherAPI';
import { createForm, createHome, createForecast } from '../ui/ui';

const state = (() => {
    let _weather = null;
    let _city = null;
    let _forecast = null;
    let _home = null;

    return {
        get city() {
            return _city;
        },
        set city(city) {
            _city = city;
        },
        get weather() {
            return _weather;
        },
        set weather(weather) {
            _weather = weather;
            _city = weather.resolvedAddress;
            _forecast = weather.forecast.days;
        },
        get forecast() {
            return _forecast;
        },
        set forecast(forecast) {
            _forecast = forecast;
        },
        get home() {
            return _home;
        },
        set home(home) {
            _home = home;
        },
        createForm() {
            return createForm();
        },
        async loadWeather(city) {
            try {
                const weatherData = await getWeather(city);
                this.weather = weatherData;
                this.home = createHome(weatherData);
                this.forecast = createForecast(weatherData.forecast.days);
                return weatherData;
            } catch (error) {
                console.error('Error loading weather:', error);
            }
        },
    };
})();

export { state };
