export function createContact() {
    const contactDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Get in touch';
    contactDiv.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = 'We are here to improve your drink experience';
    contactDiv.appendChild(description);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Book Now';
    contactDiv.appendChild(contactButton);

    return contactDiv;
}

