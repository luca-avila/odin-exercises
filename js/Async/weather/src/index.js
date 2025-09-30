import './css/style.css';
import { state } from './state/state';
import { setListeners } from './events/listeners';
import { clearApp } from './ui/ui.js';

// Helper function to add form listener
function addFormListener(form, state) {
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const city = event.target.querySelector('#city').value;

        try {
            await state.loadWeather(city);
            clearApp();
            const app = document.querySelector('#app');
            app.appendChild(state.home);
            setListeners(state);
        } catch (error) {
            console.error('Failed to load weather:', error);
        }
    });
}

const form = state.createForm();
const app = document.querySelector('#app');
app.appendChild(form);

addFormListener(form, state);
