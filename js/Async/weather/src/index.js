import { getWeather } from './api/weatherAPI';

async function testGetWeatgher() {
    const myweather = await getWeather('Buenos Aires');
    console.log(myweather);
}

testGetWeatgher();
