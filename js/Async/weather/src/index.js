import './css/style.css';
import { state } from './state/state';

const form = state.createForm();
document.body.appendChild(form);

form.addEventListener('submit', async event => {
    event.preventDefault();
    const city = event.target.querySelector('#city').value;

    try {
        await state.loadWeather(city);
        document.body.innerHTML = '';
        document.body.appendChild(state.home);
    } catch (error) {
        console.error('Failed to load weather:', error);
    }

    const forecastButton = document.querySelector('#forecast-button');
    forecastButton.addEventListener('click', () => {
        document.body.innerHTML = '';
        document.body.appendChild(state.forecast);
    });
});
