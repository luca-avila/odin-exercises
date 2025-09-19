import { createGameboard } from './ui/gameboard.js';
import { createCellClickListener } from './events/listeners.js';

const gameboard = createGameboard();

document.body.appendChild(gameboard);

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => createCellClickListener(cell));