import { createGameboard } from './ui/gameboard.js';
import { setCellClickListener, setResetBoardButtonListener, setStartButtonListener } from './events/listeners.js';
import { createNamesInterface, resetBoardButton, setDefaultHiddenState } from './ui/interface.js';

document.addEventListener('DOMContentLoaded', () => {
    // Create and append UI elements
    const app = document.createElement('div');
    app.classList.add('app');
    
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    
    const gameboard = createGameboard();
    const namesInterface = createNamesInterface();
    const resetBtn = resetBoardButton();
    
    document.body.appendChild(namesInterface);
    app.appendChild(resetBtn);
    gameContainer.appendChild(gameboard);
    app.appendChild(gameContainer);
    document.body.appendChild(app);
    
    // Set default hidden state
    setDefaultHiddenState();
    
    // Set up event listeners
    setStartButtonListener();
    setResetBoardButtonListener();
    
    // Set up cell click listeners
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => setCellClickListener(cell));
});