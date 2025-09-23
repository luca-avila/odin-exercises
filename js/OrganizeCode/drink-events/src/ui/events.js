import event2Img from '../assets/event2.jpg';
import event3Img from '../assets/event3.jpg';
import event4Img from '../assets/event4.jpg';
import event5Img from '../assets/event5.jpg';

export function createEvents() {
    const eventsDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Our Events';
    eventsDiv.appendChild(title);

    // Event 1
    const event1 = document.createElement('div');
    event1.classList.add('event-card');
    
    const event1Title = document.createElement('h2');
    event1Title.textContent = 'Wedding Bar Service';
    event1.appendChild(event1Title);
    
    const event1Image = document.createElement('img');
    event1Image.src = event1Img;
    event1Image.alt = 'Event 1 Image';
    event1.appendChild(event1Image);

    const event1Duration = document.createElement('p');
    const durationLabel = document.createElement('strong');
    durationLabel.textContent = 'Duration: ';
    event1Duration.appendChild(durationLabel);
    event1Duration.appendChild(document.createTextNode('4-6 hours'));
    event1.appendChild(event1Duration);
    
    const event1Capacity = document.createElement('p');
    const capacityLabel = document.createElement('strong');
    capacityLabel.textContent = 'Capacity: ';
    event1Capacity.appendChild(capacityLabel);
    event1Capacity.appendChild(document.createTextNode('Up to 200 guests'));
    event1.appendChild(event1Capacity);
    
    const event1Price = document.createElement('p');
    const priceLabel = document.createElement('strong');
    priceLabel.textContent = 'Price: ';
    event1Price.appendChild(priceLabel);
    event1Price.appendChild(document.createTextNode('$800-1200'));
    event1.appendChild(event1Price);
    
    const event1Description = document.createElement('p');
    event1Description.textContent = 'Complete bar setup with professional bartenders, custom cocktail menu, and premium spirits for your special day.';
    event1.appendChild(event1Description);
    
    eventsDiv.appendChild(event1);

    // Event 2
    const event2 = document.createElement('div');
    event2.classList.add('event-card');
    
    const event2Title = document.createElement('h2');
    event2Title.textContent = 'Corporate Cocktail Hour';
    event2.appendChild(event2Title);
    
    const event2Image = document.createElement('img');
    event2Image.src = event2Img;
    event2Image.alt = 'Event 2 Image';
    event2.appendChild(event2Image);

    const event2Duration = document.createElement('p');
    const durationLabel2 = document.createElement('strong');
    durationLabel2.textContent = 'Duration: ';
    event2Duration.appendChild(durationLabel2);
    event2Duration.appendChild(document.createTextNode('2-3 hours'));
    event2.appendChild(event2Duration);
    
    const event2Capacity = document.createElement('p');
    const capacityLabel2 = document.createElement('strong');
    capacityLabel2.textContent = 'Capacity: ';
    event2Capacity.appendChild(capacityLabel2);
    event2Capacity.appendChild(document.createTextNode('Up to 100 guests'));
    event2.appendChild(event2Capacity);
    
    const event2Price = document.createElement('p');
    const priceLabel2 = document.createElement('strong');
    priceLabel2.textContent = 'Price: ';
    event2Price.appendChild(priceLabel2);
    event2Price.appendChild(document.createTextNode('$400-600'));
    event2.appendChild(event2Price);
    
    const event2Description = document.createElement('p');
    event2Description.textContent = 'Professional networking event with signature cocktails, appetizers, and experienced mixologists.';
    event2.appendChild(event2Description);
    
    eventsDiv.appendChild(event2);

    // Event 3
    const event3 = document.createElement('div');
    event3.classList.add('event-card');
    
    const event3Title = document.createElement('h2');
    event3Title.textContent = 'Birthday Party Bar';
    event3.appendChild(event3Title);
    
    const event3Image = document.createElement('img');
    event3Image.src = event3Img;
    event3Image.alt = 'Event 3 Image';
    event3.appendChild(event3Image);

    const event3Duration = document.createElement('p');
    const durationLabel3 = document.createElement('strong');
    durationLabel3.textContent = 'Duration: ';
    event3Duration.appendChild(durationLabel3);
    event3Duration.appendChild(document.createTextNode('3-4 hours'));
    event3.appendChild(event3Duration);
    
    const event3Capacity = document.createElement('p');
    const capacityLabel3 = document.createElement('strong');
    capacityLabel3.textContent = 'Capacity: ';
    event3Capacity.appendChild(capacityLabel3);
    event3Capacity.appendChild(document.createTextNode('Up to 50 guests'));
    event3.appendChild(event3Capacity);
    
    const event3Price = document.createElement('p');
    const priceLabel3 = document.createElement('strong');
    priceLabel3.textContent = 'Price: ';
    event3Price.appendChild(priceLabel3);
    event3Price.appendChild(document.createTextNode('$300-500'));
    event3.appendChild(event3Price);
    
    const event3Description = document.createElement('p');
    event3Description.textContent = 'Fun and festive bar service with themed cocktails, party games, and personalized drink menus.';
    event3.appendChild(event3Description);
    
    eventsDiv.appendChild(event3);

    // Event 4
    const event4 = document.createElement('div');
    event4.classList.add('event-card');
    
    const event4Title = document.createElement('h2');
    event4Title.textContent = 'Holiday Party Catering';
    event4.appendChild(event4Title);
    
    const event4Image = document.createElement('img');
    event4Image.src = event4Img;
    event4Image.alt = 'Event 4 Image';
    event4.appendChild(event4Image);

    const event4Duration = document.createElement('p');
    const durationLabel4 = document.createElement('strong');
    durationLabel4.textContent = 'Duration: ';
    event4Duration.appendChild(durationLabel4);
    event4Duration.appendChild(document.createTextNode('4-5 hours'));
    event4.appendChild(event4Duration);
    
    const event4Capacity = document.createElement('p');
    const capacityLabel4 = document.createElement('strong');
    capacityLabel4.textContent = 'Capacity: ';
    event4Capacity.appendChild(capacityLabel4);
    event4Capacity.appendChild(document.createTextNode('Up to 150 guests'));
    event4.appendChild(event4Capacity);
    
    const event4Price = document.createElement('p');
    const priceLabel4 = document.createElement('strong');
    priceLabel4.textContent = 'Price: ';
    event4Price.appendChild(priceLabel4);
    event4Price.appendChild(document.createTextNode('$600-900'));
    event4.appendChild(event4Price);
    
    const event4Description = document.createElement('p');
    event4Description.textContent = 'Seasonal cocktail menu with holiday-themed drinks, warm beverages, and festive decorations.';
    event4.appendChild(event4Description);
    
    eventsDiv.appendChild(event4);

    return eventsDiv;
}