// Import CSS files
import './css/normalize.css';
import './css/styles.css';

// Import UI modules
import { init, switchTab } from './state/state.js';


const content = document.querySelector('#content');
init();

const homeTab = document.querySelector('#home-tab');
homeTab.addEventListener('click', () => {
    switchTab('home');
});

const contactTab = document.querySelector('#contact-tab');
contactTab.addEventListener('click', () => {
    switchTab('contact');
});

const eventsTab = document.querySelector('#events-tab');
eventsTab.addEventListener('click', () => {
    switchTab('events');
});
