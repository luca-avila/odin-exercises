function createGameboard() {
    const gameboard = document.createElement('div');
    gameboard.id = 'game-board';

    gameboard.appendChild(createFirstRow());
    gameboard.appendChild(createSecondRow());
    gameboard.appendChild(createThirdRow());

    return gameboard;
}

function createFirstRow() {
    const firstRow = document.createElement('div');
    firstRow.classList.add('first-row');
    firstRow.appendChild(createCell());
    firstRow.appendChild(createCell());
    firstRow.appendChild(createCell());
    return firstRow;
}

function createSecondRow() {
    const secondRow = document.createElement('div');    
    secondRow.classList.add('second-row');
    secondRow.appendChild(createCell());
    secondRow.appendChild(createCell());
    secondRow.appendChild(createCell());

    return secondRow;
}

function createThirdRow() {
    const thirdRow = document.createElement('div');
    thirdRow.classList.add('third-row');
    thirdRow.appendChild(createCell());
    thirdRow.appendChild(createCell());
    thirdRow.appendChild(createCell());
    return thirdRow;
}

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

export { createGameboard };