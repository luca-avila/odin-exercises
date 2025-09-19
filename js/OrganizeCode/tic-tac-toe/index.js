import { createGameboard } from './ui/gameboard.js';
import { createCellClickListener } from './events/listeners.js';
import { createNamesInterface, displayPlayerData, resetBoardButton, updateScore, toggleHiddenState } from './ui/interface.js';

const gameboard = createGameboard();

const player1Data = displayPlayerData('Player1', 0);
const player2Data = displayPlayerData('Player2', 0);
document.body.appendChild(player2Data);
document.body.appendChild(player1Data);
const resetBtn = resetBoardButton();
document.body.appendChild(resetBtn);
document.body.appendChild(gameboard);

const namesInterface = createNamesInterface();
document.body.appendChild(namesInterface);

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', handleStartButtonClick);

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => createCellClickListener(cell));