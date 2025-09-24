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

    const HeroimageContainer = document.createElement('figure');
    HeroimageContainer.classList.add('image-container');
    const cocktailImage = document.createElement('img');
    cocktailImage.src = cocktailImg;
    cocktailImage.alt = 'Cocktail Image';
    HeroimageContainer.appendChild(cocktailImage);
    hero.appendChild(HeroimageContainer);

    // Description
    const description = document.createElement('figcaption');
    description.textContent =
        'Professional drink catering services for weddings, corporate events, and private parties. We bring the bar to you with custom cocktail menus and expert mixologists.';
    HeroimageContainer.appendChild(description);

    // Featured Event (Hero)
    const featuredEvent = document.createElement('div');
    featuredEvent.classList.add('featured-event');

    const featuredImageContainer = document.createElement('figure');
    featuredImageContainer.classList.add('image-container');
    const featuredTitle = document.createElement('h2');
    featuredTitle.textContent = 'Featured Event';
    featuredImageContainer.appendChild(featuredTitle);

    const event1Image = document.createElement('img');
    event1Image.src = event1Img;
    event1Image.alt = 'Event 1 Image';
    featuredImageContainer.appendChild(event1Image);
    featuredEvent.appendChild(featuredImageContainer);

    const eventTitle = document.createElement('h2');
    eventTitle.textContent = 'Wedding & Party Bar Service';
    featuredImageContainer.appendChild(eventTitle);

    const eventDescription = document.createElement('figcaption');
    eventDescription.textContent =
        'Professional cocktail catering for your special events - Custom menus available';
    featuredImageContainer.appendChild(eventDescription);

    const eventButton = document.createElement('button');
    eventButton.textContent = 'Book Now';
    featuredImageContainer.appendChild(eventButton);

    homeContainer.appendChild(hero);
    homeContainer.appendChild(featuredEvent);

    return homeContainer;
}
