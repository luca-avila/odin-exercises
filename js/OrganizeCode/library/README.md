# Library Management System
https://odin-library-phi.vercel.app/

> **The Odin Project Assignment** - JavaScript Fundamentals

A simple library management system built with vanilla JavaScript, HTML, and CSS. This project demonstrates object-oriented programming concepts, DOM manipulation, and event handling.

## 📋 Assignment Requirements

### 1. **Project Setup**
- Set up a Git repository with skeleton HTML/CSS and JS files
- Organize code with proper file structure

### 2. **Book Constructor & Data Management**
Create a book constructor and implement data storage:

```javascript
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
```

**Key Requirements:**
- All book objects stored in an array
- Each book must have a unique ID using `crypto.randomUUID()`
- Separate function to create and store books

### 3. **Display Functionality**
- Write a function that loops through the array and displays each book
- Display books in a table or card format
- **Important**: Keep data and display logic separate for maintainability

### 4. **Add New Books**
- Add a "New Book" button that opens a form
- Form should collect: author, title, number of pages, read status
- Use `event.preventDefault()` to handle form submission
- Consider using `<dialog>` tag for modals

### 5. **Book Management**
- **Remove Books**: Add a remove button on each book's display
- **Toggle Read Status**: Add a button to change read status
- Use `data-attributes` to associate DOM elements with book objects
- Create a Book prototype function to toggle read status

## 🏗️ Project Structure

```
library/
├── index.html          # Main HTML file
├── style.css           # Styling
├── index.js            # Main JavaScript file
├── models/
│   └── book.js         # Book constructor and methods
├── ui/
│   ├── form.js         # Form handling
│   └── render.js       # Display logic
├── events/
│   └── listeners.js    # Event listeners
└── data/
    └── library.js      # Library data management
```

## 🎯 Key Learning Objectives

### **Primary Focus: Objects, Constructors & Prototypes**
- **Constructor Functions**: Creating objects with the `new` keyword
- **Object Properties**: Adding and managing object data
- **Prototype Methods**: Adding shared methods to all instances
- **Object Instances**: Understanding how objects are created and managed
- **Method Binding**: Using `this` keyword in object methods

### **Secondary Concepts**
- **DOM Manipulation**: Creating, updating, and removing elements
- **Event Handling**: Form submission and button interactions
- **Data Management**: Array operations and unique identifiers
- **Code Organization**: Separation of concerns and modular structure

## 🚀 Getting Started

1. Open `index.html` in your browser
2. Use the "New Book" button to add books to your library
3. Manage your collection with remove and toggle read status buttons

---

*This project is part of The Odin Project's JavaScript curriculum focusing on fundamental programming concepts.*

