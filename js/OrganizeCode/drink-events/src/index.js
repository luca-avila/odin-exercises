console.log('Webpack is working! Drink Events website loaded successfully!');
import { createHome } from './ui/home.js';

const home = createHome();

document.body.appendChild(home);