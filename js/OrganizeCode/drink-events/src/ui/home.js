export function createHome() {
    const homeDiv = document.createElement('div');
    
    // Title
    const title = document.createElement('h1');
    title.textContent = 'Forest Pour';
    homeDiv.appendChild(title);

    // Description
    const description = document.createElement('p');
    description.textContent = 'Welcome to Forest Pour';
    homeDiv.appendChild(description);

    // Hero
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroTitle = document.createElement('h2');
    heroTitle.textContent = 'Experience the art of mixology';
    hero.appendChild(heroTitle);

    const heroDescription = document.createElement('p');
    heroDescription.textContent = 'Join us for unforgettable drink events and masterclasses';
    hero.appendChild(heroDescription);

    const heroButton = document.createElement('button');
    heroButton.textContent = 'Learn More';
    hero.appendChild(heroButton);

    homeDiv.appendChild(hero);

    // Featured content
    const featuredContent = document.createElement('div');
    featuredContent.classList.add('featured-content');
    
    const featuredTitle = document.createElement('h3');
    featuredTitle.textContent = 'Featured Event';
    featuredContent.appendChild(featuredTitle);
    
    const featuredDescription = document.createElement('p');
    featuredDescription.textContent = 'Wine & Cheese Pairing Night - Every Friday at 7 PM';
    featuredContent.appendChild(featuredDescription);
    
    homeDiv.appendChild(featuredContent);

    return homeDiv;
}