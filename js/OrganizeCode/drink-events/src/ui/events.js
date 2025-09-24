import event2Img from '../assets/event2.jpg';
import event3Img from '../assets/event3.jpg';
import event4Img from '../assets/event4.jpg';
import event5Img from '../assets/event5.jpg';

export function createEvents() {
    const eventsDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Our Events';
    eventsDiv.classList.add('events-container');
    eventsDiv.appendChild(title);

    // Event 1
    const event1 = document.createElement('div');
    event1.classList.add('event-card');

    const event1Title = document.createElement('h2');
    event1Title.textContent = 'Wedding Bar Service';
    event1.appendChild(event1Title);

    const event1Image = document.createElement('img');
    event1Image.src = event2Img;
    event1Image.alt = 'Event 1 Image';
    event1.appendChild(event1Image);

    const event1Duration = document.createElement('p');
    event1Duration.textContent = '4-6 hours';
    event1Duration.classList.add('event-duration');
    event1.appendChild(event1Duration);

    const event1Capacity = document.createElement('p');
    event1Capacity.textContent = 'Up to 200 guests';
    event1Capacity.classList.add('event-capacity');
    event1.appendChild(event1Capacity);

    const event1Price = document.createElement('p');
    event1Price.textContent = '$800-1200';
    event1Price.classList.add('event-price');
    event1.appendChild(event1Price);

    const event1Description = document.createElement('p');
    event1Description.textContent =
        'Complete bar setup with professional bartenders, custom cocktail menu, and premium spirits for your special day.';
    event1.appendChild(event1Description);

    eventsDiv.appendChild(event1);

    // Event 2
    const event2 = document.createElement('div');
    event2.classList.add('event-card');

    const event2Title = document.createElement('h2');
    event2Title.textContent = 'Corporate Cocktail Hour';
    event2.appendChild(event2Title);

    const event2Image = document.createElement('img');
    event2Image.src = event3Img;
    event2Image.alt = 'Event 2 Image';
    event2.appendChild(event2Image);

    const event2Duration = document.createElement('p');
    event2Duration.textContent = '2-3 hours';
    event2Duration.classList.add('event-duration');
    event2.appendChild(event2Duration);

    const event2Capacity = document.createElement('p');
    event2Capacity.textContent = 'Up to 100 guests';
    event2Capacity.classList.add('event-capacity');
    event2.appendChild(event2Capacity);

    const event2Price = document.createElement('p');
    event2Price.textContent = '$400-600';
    event2Price.classList.add('event-price');
    event2.appendChild(event2Price);

    const event2Description = document.createElement('p');
    event2Description.textContent =
        'Professional networking event with signature cocktails, appetizers, and experienced mixologists.';
    event2.appendChild(event2Description);

    eventsDiv.appendChild(event2);

    // Event 3
    const event3 = document.createElement('div');
    event3.classList.add('event-card');

    const event3Title = document.createElement('h2');
    event3Title.textContent = 'Birthday Party Bar';
    event3.appendChild(event3Title);

    const event3Image = document.createElement('img');
    event3Image.src = event4Img;
    event3Image.alt = 'Event 3 Image';
    event3.appendChild(event3Image);

    const event3Duration = document.createElement('p');
    event3Duration.textContent = '3-4 hours';
    event3Duration.classList.add('event-duration');
    event3.appendChild(event3Duration);

    const event3Capacity = document.createElement('p');
    event3Capacity.textContent = 'Up to 50 guests';
    event3Capacity.classList.add('event-capacity');
    event3.appendChild(event3Capacity);

    const event3Price = document.createElement('p');
    event3Price.textContent = '$300-500';
    event3Price.classList.add('event-price');
    event3.appendChild(event3Price);

    const event3Description = document.createElement('p');
    event3Description.textContent =
        'Fun and festive bar service with themed cocktails, party games, and personalized drink menus.';
    event3.appendChild(event3Description);

    eventsDiv.appendChild(event3);

    // Event 4
    const event4 = document.createElement('div');
    event4.classList.add('event-card');

    const event4Title = document.createElement('h2');
    event4Title.textContent = 'Holiday Party Catering';
    event4.appendChild(event4Title);

    const event4Image = document.createElement('img');
    event4Image.src = event5Img;
    event4Image.alt = 'Event 4 Image';
    event4.appendChild(event4Image);

    const event4Duration = document.createElement('p');
    event4Duration.textContent = '4-5 hours';
    event4Duration.classList.add('event-duration');
    event4.appendChild(event4Duration);

    const event4Capacity = document.createElement('p');
    event4Capacity.textContent = 'Up to 150 guests';
    event4Capacity.classList.add('event-capacity');
    event4.appendChild(event4Capacity);

    const event4Price = document.createElement('p');
    event4Price.textContent = '$600-900';
    event4Price.classList.add('event-price');
    event4.appendChild(event4Price);

    const event4Description = document.createElement('p');
    event4Description.textContent =
        'Seasonal cocktail menu with holiday-themed drinks, warm beverages, and festive decorations.';
    event4.appendChild(event4Description);

    eventsDiv.appendChild(event4);

    return eventsDiv;
}
