import { createGameboard } from './ui/gameboard.js';
import { createCellClickListener } from './events/listeners.js';
import { createNamesInterface, displayPlayersData, resetBoardButton } from './ui/interface.js';

const gameboard = createGameboard();

const playersData = displayPlayersData('Player 1', 0);
const playersData2 = displayPlayersData('Player 2', 0);
document.body.appendChild(playersData2);
document.body.appendChild(playersData);
const resetBtn = resetBoardButton();
document.body.appendChild(resetBtn);

document.body.appendChild(gameboard);

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => createCellClickListener(cell));