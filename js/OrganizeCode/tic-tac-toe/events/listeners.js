import { toggleHiddenState, displayPlayerData } from '../ui/interface.js';
import { game } from '../models/game.js';
import { createPlayer } from '../models/player.js';

function setCellClickListener(cell) {
    cell.addEventListener('click', () => {
        const row = parseInt(cell.dataset.row);
        const column = parseInt(cell.dataset.column);
        
        // Make the move in game logic
        if (game.makeMove(row, column)) {
            // Get the player who just moved (before switching)
            const playerWhoMoved = game.getCurrentPlayer() === game.players.player1 ? game.players.player2 : game.players.player1;
            
            // Update the cell display
            cell.textContent = playerWhoMoved.marker;
            cell.classList.add('occupied');
            
            // Check for win or tie
            if (game.checkWin()) {
                alert(`${playerWhoMoved.name} wins!`);
                playerWhoMoved.addWin();
                updateScore(playerWhoMoved.name, playerWhoMoved.getWins());
                resetBoardButton();
            } else if (game.checkTie()) {
                alert('It\'s a tie!');
                resetBoardButton();
            }
        }
    });
}

function setStartButtonListener() {
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        // Get player names from inputs
        const player1NameInput = document.querySelector('.player1-name input');
        const player2NameInput = document.querySelector('.player2-name input');
        
        const player1Name = player1NameInput.value || 'Player 1';
        const player2Name = player2NameInput.value || 'Player 2';
        
        // Create players
        const player1 = createPlayer(player1Name, 'X');
        const player2 = createPlayer(player2Name, 'O');
        game.setPlayers(player1, player2);
        
        // Create and display player data
        const player1Data = displayPlayerData(player1Name, 0);
        const player2Data = displayPlayerData(player2Name, 0);
        document.body.appendChild(player1Data);
        document.body.appendChild(player2Data);
        
        // Toggle hidden state
        toggleHiddenState();
    });
}

function setResetBoardButtonListener() {
    const resetBoardButton = document.querySelector('.reset-board-button');
    resetBoardButton.addEventListener('click', () => {
        game.resetGame();
        // Clear all cells
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('occupied');
        });
    });
}

export { setCellClickListener, setStartButtonListener, setResetBoardButtonListener };