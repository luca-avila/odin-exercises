export function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-container');

    const title = document.createElement('h1');
    title.textContent = 'Get in Touch';
    contactDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent =
        'Ready to elevate your event with professional drink catering? Contact us today for a personalized quote.';
    contactDiv.appendChild(description);

    // Contact Info Section
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    // Phone
    const phoneSection = document.createElement('div');
    phoneSection.classList.add('contact-item');
    const phoneIcon = document.createElement('div');
    phoneIcon.classList.add('contact-icon');
    phoneIcon.textContent = '📞';
    const phoneText = document.createElement('div');
    phoneText.innerHTML = '<strong>Phone</strong><br>(555) 123-4567';
    phoneSection.appendChild(phoneIcon);
    phoneSection.appendChild(phoneText);
    contactInfo.appendChild(phoneSection);

    // Email
    const emailSection = document.createElement('div');
    emailSection.classList.add('contact-item');
    const emailIcon = document.createElement('div');
    emailIcon.classList.add('contact-icon');
    emailIcon.textContent = '✉️';
    const emailText = document.createElement('div');
    emailText.innerHTML = '<strong>Email</strong><br>info@forestpour.com';
    emailSection.appendChild(emailIcon);
    emailSection.appendChild(emailText);
    contactInfo.appendChild(emailSection);

    // Location
    const locationSection = document.createElement('div');
    locationSection.classList.add('contact-item');
    const locationIcon = document.createElement('div');
    locationIcon.classList.add('contact-icon');
    locationIcon.textContent = '📍';
    const locationText = document.createElement('div');
    locationText.innerHTML =
        '<strong>Service Area</strong><br>Greater Metro Area';
    locationSection.appendChild(locationIcon);
    locationSection.appendChild(locationText);
    contactInfo.appendChild(locationSection);

    contactDiv.appendChild(contactInfo);

    // Hours Section
    const hoursSection = document.createElement('div');
    hoursSection.classList.add('hours-section');
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Business Hours';
    hoursSection.appendChild(hoursTitle);

    const hoursList = document.createElement('div');
    hoursList.classList.add('hours-list');
    hoursList.innerHTML = `
        <div class="hours-item"><span>Monday - Friday:</span> 9:00 AM - 6:00 PM</div>
        <div class="hours-item"><span>Saturday:</span> 10:00 AM - 4:00 PM</div>
        <div class="hours-item"><span>Sunday:</span> By appointment only</div>
    `;
    hoursSection.appendChild(hoursList);
    contactDiv.appendChild(hoursSection);

    // CTA Section
    const ctaSection = document.createElement('div');
    ctaSection.classList.add('cta-section');
    const ctaTitle = document.createElement('h3');
    ctaTitle.textContent = 'Ready to Book?';
    ctaSection.appendChild(ctaTitle);

    const ctaDescription = document.createElement('p');
    ctaDescription.textContent =
        'Get a free quote for your next event. We respond within 24 hours.';
    ctaSection.appendChild(ctaDescription);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Request Quote';
    contactButton.classList.add('cta-button');
    ctaSection.appendChild(contactButton);

    contactDiv.appendChild(ctaSection);

    return contactDiv;
}
