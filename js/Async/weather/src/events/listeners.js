export function setListeners(state) {
    const backToHomeButton = state.forecast.querySelector(
        '#back-to-home-button'
    );
    // Go back to home
    backToHomeButton.addEventListener('click', () => {
        document.body.innerHTML = '';
        document.body.appendChild(state.home);
    });

    // Go back to form
    const backButton = state.home.querySelector('#back-button');
    backButton.addEventListener('click', () => {
        document.body.innerHTML = '';
        document.body.appendChild(state.createForm());
    });

    // Go to forecast
    const forecastButton = state.home.querySelector('#forecast-button');
    forecastButton.addEventListener('click', () => {
        document.body.innerHTML = '';
        document.body.appendChild(state.forecast);
    });
}
