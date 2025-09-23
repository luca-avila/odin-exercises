# Restaurant Page

A modern drink events website built with Webpack, featuring tabbed navigation and dynamic content loading. This project demonstrates module bundling, ES6 modules, and modern JavaScript development practices.

https://forest-pour.vercel.app/

## 🎯 Learning Objectives

This project focuses on:

- **Webpack Configuration**: Setting up modern build tools and module bundling
- **ES6 Modules**: Using import/export for code organization
- **Dynamic Content Loading**: Creating single-page application behavior
- **Tabbed Navigation**: Implementing client-side routing concepts
- **GitHub Pages Deployment**: Deploying bundled applications to static hosting

## 🏗️ Project Structure

```
restaurant-page/
├── package.json           # Dependencies and scripts
├── webpack.config.js      # Webpack configuration
├── .gitignore            # Git ignore rules
├── src/
│   ├── template.html     # HTML skeleton
│   ├── index.js          # Entry point
│   ├── home.js           # Home tab module
│   ├── menu.js           # Menu tab module
│   └── contact.js        # Contact tab module
└── dist/                 # Built files (auto-generated)
```

## 🎯 Assignment Requirements

### 1. **Project Setup**
- ✅ Create `package.json` and configure Webpack
- ✅ Set up `.gitignore` with `node_modules` and `dist`
- ✅ Configure HTML skeleton with header, nav, and content div
- ✅ Test JavaScript execution with `npx webpack serve`

### 2. **HTML Structure**
- ✅ Header with navigation buttons (not links)
- ✅ Tab buttons for "Home", "Menu", "Contact"
- ✅ Single `<div id="content">` for dynamic content
- ✅ Initial hardcoded content for testing

### 3. **JavaScript Implementation**
- ✅ Remove hardcoded content from HTML
- ✅ Create content dynamically with JavaScript
- ✅ Separate module for initial page load
- ✅ Import and call page load function in `index.js`

### 4. **Tabbed Navigation**
- ✅ Each tab content in separate module
- ✅ Modules export functions that create and style content
- ✅ Tab-switching logic in `index.js`
- ✅ Event listeners for navigation buttons
- ✅ Content clearing and repopulation on tab switch

### 5. **Deployment**
- ✅ GitHub Pages deployment setup
- ✅ `gh-pages` branch configuration
- ✅ Build process with `npx webpack`
- ✅ Automated deployment workflow

## 🚀 Getting Started

### Development
```bash
# Install dependencies
npm install

# Start development server
npx webpack serve

# Open http://localhost:8080
```

### Production Build
```bash
# Build for production
npx webpack

# Files will be generated in dist/ folder
```

## 🧠 Key Learning Concepts

### **Webpack & Module Bundling**
- **Entry Points**: Defining where the application starts
- **Output Configuration**: Where built files are generated
- **Loaders**: Processing different file types (HTML, CSS, JS)
- **Development Server**: Hot reloading and local development

### **ES6 Modules**
```javascript
// Exporting functions
export function createHomePage() {
  // Module content
}

// Importing modules
import { createHomePage } from './home.js';
```

### **Dynamic Content Loading**
- **Single Page Application**: Changing content without page reload
- **DOM Manipulation**: Creating and appending elements dynamically
- **Event Delegation**: Handling navigation events
- **Content Management**: Clearing and repopulating content areas

### **Tabbed Navigation Pattern**
```javascript
// Tab switching logic
function switchTab(tabFunction) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear content
  content.appendChild(tabFunction()); // Add new content
}
```

## 📚 Technical Implementation

### **Webpack Configuration**
- HTML template processing
- JavaScript bundling and minification
- Development server with hot reloading
- Production build optimization

### **Module Architecture**
- **Separation of Concerns**: Each tab in its own module
- **Reusable Functions**: Content creation functions
- **Clean Imports**: Organized module dependencies
- **Maintainable Code**: Easy to add new tabs or modify existing ones

### **Deployment Strategy**
- **GitHub Pages**: Static site hosting
- **Branch-based Deployment**: `gh-pages` branch for built files
- **Automated Workflow**: Build and deploy process
- **Version Control**: Keeping source and built files separate

## 🎨 Features

- **Responsive Design**: Works on desktop and mobile
- **Tabbed Navigation**: Smooth content switching
- **Dynamic Content**: JavaScript-generated pages
- **Modern Build Process**: Webpack-powered development
- **Easy Deployment**: GitHub Pages integration

---

*This project is part of The Odin Project curriculum, focusing on modern JavaScript development tools and deployment practices.*
