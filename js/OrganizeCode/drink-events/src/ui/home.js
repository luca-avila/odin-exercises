export function createHome() {
    const homeDiv = document.createElement('div');
    
    // Title
    const title = document.createElement('h1');
    title.textContent = 'Forest Pour';
    homeDiv.appendChild(title);

    // Description
    const description = document.createElement('p');
    description.textContent = 'Professional drink catering services for weddings, corporate events, and private parties. We bring the bar to you with custom cocktail menus and expert mixologists.';
    homeDiv.appendChild(description);

    // Featured Event (Hero)
    const featuredEvent = document.createElement('div');
    featuredEvent.classList.add('featured-event');

    const featuredTitle = document.createElement('h2');
    featuredTitle.textContent = 'Featured Event';
    featuredEvent.appendChild(featuredTitle);

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = 'Wedding & Party Bar Service';
    featuredEvent.appendChild(eventTitle);

    const eventDescription = document.createElement('p');
    eventDescription.textContent = 'Professional cocktail catering for your special events - Custom menus available';
    featuredEvent.appendChild(eventDescription);

    const eventButton = document.createElement('button');
    eventButton.textContent = 'Book Now';
    featuredEvent.appendChild(eventButton);

    homeDiv.appendChild(featuredEvent);

    return homeDiv;
}