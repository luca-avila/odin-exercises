function createGameboard() {
    const gameboard = document.createElement('div');
    gameboard.id = 'game-board';

    gameboard.appendChild(createFirstColumn());
    gameboard.appendChild(createSecondColumn());
    gameboard.appendChild(createThirdColumn());

    return gameboard;
}

function createFirstColumn() {
    const firstRow = document.createElement('div');
    firstRow.classList.add('first-column');

    const cell1 = createCell();
    const cell2 = createCell();
    const cell3 = createCell();

    cell1.classList.add('row-1');
    cell2.classList.add('row-2');
    cell3.classList.add('row-3');

    firstRow.appendChild(cell1);
    firstRow.appendChild(cell2);
    firstRow.appendChild(cell3);

    return firstRow;
}

function createSecondColumn() {
    const secondRow = document.createElement('div');    
    secondRow.classList.add('second-column');
    
    const cell1 = createCell();
    const cell2 = createCell();
    const cell3 = createCell();

    cell1.classList.add('row-1');
    cell2.classList.add('row-2');
    cell3.classList.add('row-3');

    secondRow.appendChild(cell1);
    secondRow.appendChild(cell2);
    secondRow.appendChild(cell3);

    return secondRow;
}

function createThirdColumn() {
    const thirdRow = document.createElement('div');
    thirdRow.classList.add('third-column');

    const cell1 = createCell();
    const cell2 = createCell();
    const cell3 = createCell();

    cell1.classList.add('row-1');
    cell2.classList.add('row-2');
    cell3.classList.add('row-3');

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