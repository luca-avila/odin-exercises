function createForm() {
    const form = document.createElement('form');
    form.id = 'weather-form';

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.id = 'city';
    cityInput.placeholder = 'Enter a city';
    form.appendChild(cityInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Get Weather';
    form.appendChild(submitButton);

    return form;
}

export { createForm };
