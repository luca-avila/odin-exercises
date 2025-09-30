import './css/style.css';
import { createForm, createHome } from './ui/ui';

async function testGetWeather(city) {
    const home = await createHome(city);
    document.body.appendChild(home);
}

const form = createForm();
document.body.appendChild(form);

form.addEventListener('submit', event => {
    event.preventDefault();
    const city = event.target.querySelector('#city').value;
    testGetWeather(city);
});
