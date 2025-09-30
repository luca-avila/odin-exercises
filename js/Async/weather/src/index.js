import { getWeather } from './api/weatherAPI';
import { createDayCard } from './ui/ui';

async function testGetWeatgher() {
    const myweather = await getWeather('Buenos Aires');
    console.log(myweather);
    const address = document.createElement('h1');
    address.textContent = myweather.resolvedAddress;
    document.body.appendChild(address);
    const dayCard = createDayCard(myweather.forecast.days[1]);
    document.body.appendChild(dayCard);
}

testGetWeatgher();
