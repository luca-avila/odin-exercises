console.log('Webpack is working! Drink Events website loaded successfully!');
import { createHome } from './ui/home.js';
import { createEvents } from './ui/events.js';
import { createContact } from './ui/contact.js';


const home = createHome();

document.body.appendChild(home);