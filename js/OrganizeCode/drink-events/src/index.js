// Import CSS files
import './css/normalize.css';
import './css/styles.css';

// Import UI modules
import { createHome } from './ui/home.js';
import { createEvents } from './ui/events.js';
import { createContact } from './ui/contact.js';


const home = createHome();

document.body.appendChild(home);