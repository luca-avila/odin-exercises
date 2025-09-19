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

    const cell1 = createCell();
    const cell2 = createCell();
    const cell3 = createCell();

    cell1.classList.add('col-1');
    cell2.classList.add('col-2');
    cell3.classList.add('col-3');

    firstRow.appendChild(cell1);
    firstRow.appendChild(cell2);
    firstRow.appendChild(cell3);

    return firstRow;
}

function createSecondRow() {
    const secondRow = document.createElement('div');    
    secondRow.classList.add('second-row');
    
    const cell1 = createCell();
    const cell2 = createCell();
    const cell3 = createCell();

    cell1.classList.add('col-1');
    cell2.classList.add('col-2');
    cell3.classList.add('col-3');

    secondRow.appendChild(cell1);
    secondRow.appendChild(cell2);
    secondRow.appendChild(cell3);

    return secondRow;
}

function createThirdRow() {
    const thirdRow = document.createElement('div');
    thirdRow.classList.add('third-row');

    const cell1 = createCell();
    const cell2 = createCell();
    const cell3 = createCell();

    cell1.classList.add('col-1');
    cell2.classList.add('col-2');
    cell3.classList.add('col-3');

    thirdRow.appendChild(cell1);
    thirdRow.appendChild(cell2);
    thirdRow.appendChild(cell3);

    return thirdRow;
}

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

export { createGameboard };