import './css/style.css';
import { state } from './state/state';
import { setListeners } from './events/listeners';

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

    setListeners(state);
});
