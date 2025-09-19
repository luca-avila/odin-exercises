function createNameInput(labelText) {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('name-input');

    const label = document.createElement('label');
    label.textContent = labelText;
    label.htmlFor = 'name';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'name';
    input.required = true;
    input.placeholder = 'Enter your name';

    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    return inputContainer;
}

function createNamesInterface() {
    const namesInterface = document.createElement('div');
    namesInterface.classList.add('names-interface');

    const player1NameInput = createNameInput('Player 1');
    const player2NameInput = createNameInput('Player 2');
    player1NameInput.classList.add('player1-name');
    player2NameInput.classList.add('player2-name');

    namesInterface.appendChild(player1NameInput);
    namesInterface.appendChild(player2NameInput);

    const startButton = document.createElement('button');
    startButton.textContent = 'Start Game';
    startButton.classList.add('start-button');

    namesInterface.appendChild(startButton);

    return namesInterface;
}

function displayPlayerData(name, score) {
    const playersData = document.createElement('div');
    playersData.classList.add('player-data');

    const playerName = document.createElement('h2');
    playerName.textContent = name;
    playersData.appendChild(playerName);

    const playerScore = document.createElement('p');
    playerScore.textContent = score;
    playerScore.id = `${name}-score`;
    playersData.appendChild(playerScore);

    return playersData;
}

function resetBoardButton() {
    const resetBoardButton = document.createElement('button');
    resetBoardButton.textContent = 'Reset Board';
    resetBoardButton.classList.add('reset-board-button');
    return resetBoardButton;
}

function updateScore(player, score){
    const playersData = document.querySelector(`#${player}-score`);
    playersData.textContent = score;
}

function updateCell(row, column, value){
    const cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
    cell.textContent = value;
}

function toggleHiddenState(){
    // Change default hidden state to visible
    const playerData = document.querySelector('.player-data');
    const gameBoard = document.querySelector('#game-board');
    const resetBoardButton = document.querySelector('.reset-board-button');
    playerData.classList.remove('hidden');
    gameBoard.classList.remove('hidden');
    resetBoardButton.classList.remove('hidden');

    // Change default visible state to hidden
    const namesInterface = document.querySelector('.names-interface');
    namesInterface.classList.add('hidden');
}

export { createNameInput, createNamesInterface, displayPlayerData, resetBoardButton, updateScore, updateCell, toggleHiddenState };