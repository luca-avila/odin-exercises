import { clearApp } from '../ui/ui.js';
import { nextDay, prevDay } from '../ui/forecast.js';

export function setListeners(state) {
    const backToHomeButton = state.forecast.querySelector(
        '#back-to-home-button'
    );
    const app = document.querySelector('#app');
    // Go back to home
    backToHomeButton.addEventListener('click', () => {
        clearApp();
        app.appendChild(state.home);
    });

    // Go back to form
    const backButton = state.home.querySelector('#back-button');
    backButton.addEventListener('click', () => {
        clearApp();
        const form = state.createForm();
        app.appendChild(form);

        // Add event listener to the new form
        addFormListener(form, state);
    });

    // Go to forecast
    const forecastButton = state.home.querySelector('#forecast-button');
    forecastButton.addEventListener('click', () => {
        clearApp();
        app.appendChild(state.forecast);
    });

    // Carousel navigation
    const prevButton = state.forecast.querySelector('#prev-button');
    const nextButton = state.forecast.querySelector('#next-button');

    prevButton.addEventListener('click', () => {
        prevDay(state.forecast);
    });

    nextButton.addEventListener('click', () => {
        nextDay(state.forecast);
    });
}

function addFormListener(form, state) {
    const app = document.querySelector('#app');
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const city = event.target.querySelector('#city').value;

        try {
            await state.loadWeather(city);
            clearApp();
            app.appendChild(state.home);
            setListeners(state);
        } catch (error) {
            console.error('Failed to load weather:', error);
        }
    });
}
