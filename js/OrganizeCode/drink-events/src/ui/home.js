import cocktailImg from '../assets/cocktail.jpg';
import event1Img from '../assets/event1.jpg';

export function createHome() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    
    // Title
    const hero = document.createElement('div');
    hero.classList.add('hero');
    
    const title = document.createElement('h1');
    title.textContent = 'Forest Pour';
    hero.appendChild(title);

    const cocktailImage = document.createElement('img');
    cocktailImage.src = cocktailImg;
    cocktailImage.alt = 'Cocktail Image';
    hero.appendChild(cocktailImage);

    // Description
    const description = document.createElement('p');
    description.textContent = 'Professional drink catering services for weddings, corporate events, and private parties. We bring the bar to you with custom cocktail menus and expert mixologists.';
    hero.appendChild(description);

    // Featured Event (Hero)
    const featuredEvent = document.createElement('div');
    featuredEvent.classList.add('featured-event');

    const featuredTitle = document.createElement('h2');
    featuredTitle.textContent = 'Featured Event';
    featuredEvent.appendChild(featuredTitle);

    const event1Image = document.createElement('img');
    event1Image.src = event1Img;
    event1Image.alt = 'Event 1 Image';
    featuredEvent.appendChild(event1Image);

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = 'Wedding & Party Bar Service';
    featuredEvent.appendChild(eventTitle);

    const eventDescription = document.createElement('p');
    eventDescription.textContent = 'Professional cocktail catering for your special events - Custom menus available';
    featuredEvent.appendChild(eventDescription);

    const eventButton = document.createElement('button');
    eventButton.textContent = 'Book Now';
    featuredEvent.appendChild(eventButton);

    homeContainer.appendChild(hero);
    homeContainer.appendChild(featuredEvent);

    return homeContainer;
}