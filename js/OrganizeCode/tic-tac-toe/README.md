# Tic-Tac-Toe Game

A classic Tic-Tac-Toe game built with vanilla JavaScript, focusing on clean code organization and modern JavaScript patterns.

## 🎯 Learning Objectives

This project was designed to practice and understand:

- **Code Organization**: Structuring code in logical, maintainable modules
- **Factory Functions**: Creating objects using factory patterns instead of constructors
- **Module Pattern**: Using IIFE (Immediately Invoked Function Expressions) to create modules
- **Separation of Concerns**: Keeping game logic, display logic, and data separate
- **Minimal Global Code**: Encapsulating functionality to avoid global namespace pollution

## 🎮 Features

- Two-player Tic-Tac-Toe game
- Custom player names
- Win detection (rows, columns, diagonals)
- Tie game detection
- Restart functionality
- Clean, responsive interface

## 🏗️ Project Structure

```
tic-tac-toe/
├── index.html          # Main HTML file
├── index.js           # Entry point
├── css/               # Stylesheets
├── data/              # Game data and state management
├── events/            # Event handling
├── models/            # Game objects (Player, Gameboard, Game)
└── ui/                # Display and DOM manipulation
```

## 🎯 Assignment Requirements

### Core Implementation
- ✅ Gameboard stored as array inside Gameboard object
- ✅ Players stored as objects
- ✅ Game controller object to manage flow
- ✅ Minimal global code using factories and IIFE
- ✅ Logical separation of functionality across objects

### Game Logic
- ✅ Working console game with win/tie detection
- ✅ All winning combinations checked (3-in-a-row)
- ✅ Display controller for DOM manipulation
- ✅ Interactive board with click handlers
- ✅ Prevention of overwriting existing moves

### User Interface
- ✅ Player name input
- ✅ Start/restart game button
- ✅ Game result display
- ✅ Clean, functional interface

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Enter player names and start playing!

## 🧠 Code Architecture

The project follows a modular architecture with clear separation of concerns:

- **Models**: Core game objects (Player, Gameboard, Game)
- **UI**: Display logic and DOM manipulation
- **Events**: Event handling and user interactions
- **Data**: Game state management

Each module uses factory functions and IIFE patterns to maintain encapsulation and prevent global namespace pollution.

## 📚 Key Learning Concepts

### Factory Functions
Instead of using constructors, this project uses factory functions to create objects:

```javascript
const createPlayer = (name, marker) => {
  return { name, marker };
};
```

### Module Pattern (IIFE)
Single-instance objects are wrapped in IIFE to prevent multiple instances:

```javascript
const Gameboard = (() => {
  // Private variables and methods
  return {
    // Public interface
  };
})();
```

### Separation of Concerns
- **Game Logic**: Handles win conditions, turn management
- **Display Logic**: Manages DOM updates and rendering
- **Event Handling**: Processes user interactions
- **Data Management**: Maintains game state

---

*This project is part of The Odin Project curriculum, focusing on JavaScript fundamentals and code organization principles.*