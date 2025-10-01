# Weather App

https://odin-weather.vercel.app/

A modern, responsive weather application built with vanilla JavaScript that demonstrates async/await patterns and API consumption. This project was completed as part of The Odin Project curriculum to practice working with asynchronous JavaScript and external APIs.

## Features

- **Current Weather Display**: Shows current conditions, temperature, humidity, cloud cover, and precipitation probability
- **15-Day Forecast**: Interactive carousel displaying weather predictions for the next 15 days
- **Responsive Design**: Clean, modern UI that works on desktop and mobile devices
- **Real-time Weather Data**: Fetches live weather information from Visual Crossing Weather API
- **Interactive Navigation**: Smooth transitions between different views with carousel controls

## Technologies Used

- **Vanilla JavaScript**: Pure JavaScript with ES6+ features
- **Async/Await**: Modern asynchronous programming patterns
- **Fetch API**: For making HTTP requests to external weather API
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Webpack**: Module bundling and development server
- **Visual Crossing Weather API**: External API for weather data

## Key Learning Objectives

This project focused on:

- **Async/Await Patterns**: Proper handling of asynchronous operations
- **API Integration**: Consuming external REST APIs with error handling
- **Promise Management**: Working with promises and async functions
- **Error Handling**: Implementing robust error handling for API calls
- **State Management**: Managing application state with closures and modules
- **DOM Manipulation**: Dynamic content creation and event handling
- **Modern JavaScript**: ES6+ features including modules, arrow functions, and destructuring

## Project Structure

```
src/
├── api/
│   └── weatherAPI.js      # API integration and data formatting
├── css/
│   ├── normalize.css      # CSS reset
│   └── style.css          # Main stylesheet
├── events/
│   └── listeners.js       # Event handling and user interactions
├── state/
│   └── state.js           # Application state management
├── ui/
│   ├── currentWeather.js  # Current weather display component
│   ├── forecast.js        # Forecast carousel component
│   └── ui.js              # UI utilities and form components
├── index.js               # Application entry point
└── template.html          # HTML template
```

## API Usage

The app integrates with the Visual Crossing Weather API to fetch:

- Current weather conditions
- 5-day weather forecast
- Location data and timezone information
- Temperature, humidity, cloud cover, and precipitation data

## Setup and Installation

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file and add your Visual Crossing Weather API key:
    ```
    VITE_WEATHER_API_KEY=your_api_key_here
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and navigate to the local development URL

## Usage

1. Enter a city name in the search form
2. View current weather conditions
3. Navigate to the forecast to see 5-day predictions
4. Use the carousel controls to browse through different days
5. Return to the main view or search for a new location

## Key Features Demonstrated

### Async/Await Implementation

```javascript
async function getWeather(city) {
    const API_KEY = process.env.VITE_WEATHER_API_KEY;
    const route = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;
    const response = await fetch(route);
    const weather = await response.json();
    return formatJSON(weather);
}
```

### Error Handling

```javascript
try {
    await state.loadWeather(city);
    clearApp();
    app.appendChild(state.home);
    setListeners(state);
} catch (error) {
    console.error('Failed to load weather:', error);
}
```

### State Management

The application uses a closure-based state management pattern to maintain weather data, UI components, and user interactions.

## Challenges Overcome

- **API Rate Limiting**: Implemented proper error handling for API failures
- **Data Formatting**: Created utility functions to transform API responses
- **Carousel Navigation**: Built a custom carousel with smooth transitions
- **Responsive Design**: Ensured the app works across different screen sizes
- **State Synchronization**: Managed complex state between multiple UI components

## Future Enhancements

- Add location-based weather using geolocation API
- Implement weather alerts and notifications
- Add more detailed weather metrics (wind speed, pressure, etc.)
- Include weather icons and animations
- Add temperature unit conversion (Celsius/Fahrenheit)
- Implement offline functionality with service workers

## Credits

- **The Odin Project**: Curriculum and project guidelines
- **Visual Crossing Weather API**: Weather data provider
- **Modern JavaScript**: ES6+ features and best practices

---

_This project was completed as part of The Odin Project's JavaScript curriculum, focusing on asynchronous programming and API consumption._
