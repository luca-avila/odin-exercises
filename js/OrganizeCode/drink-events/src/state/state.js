import { createHome } from '../ui/home.js';
import { createEvents } from '../ui/events.js';
import { createContact } from '../ui/contact.js';

const appState = {
    currentTab: 'home',
    tabs: {
        home: createHome,
        events: createEvents,
        contact: createContact,
    },
};

function switchTab(tabName) {
    appState.currentTab = tabName;
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild(appState.tabs[tabName]());
    updateActiveTab();
}

function updateActiveTab() {
    const tabs = document.querySelectorAll('#tabs li');
    tabs.forEach((tab) => {
        tab.classList.remove('active');
        if (tab.id === appState.currentTab + '-tab') {
            tab.classList.add('active');
        }
    });
}

export { switchTab, init };

function init() {
    switchTab('home');
}
