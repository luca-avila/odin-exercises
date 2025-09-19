function createNameInput(labelText) {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('name-input');

    const label = document.createElement('label');
    label.textContent = labelText;
    const input = document.createElement('input');
    input.type = 'text';
    input.required = true;
    input.placeholder = 'Enter your name';

    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    return inputContainer;
}

function createNamesInterface() {
    const namesInterface = document.createElement('div');
    namesInterface.classList.add('names-interface');

    const namesContainer = document.createElement('div');
    namesContainer.classList.add('names-container');

    const player1NameInput = createNameInput('Player 1');
    const player2NameInput = createNameInput('Player 2');
    player1NameInput.classList.add('player1-name');
    player2NameInput.classList.add('player2-name');

    namesContainer.appendChild(player1NameInput);
    namesContainer.appendChild(player2NameInput);

    namesInterface.appendChild(namesContainer);

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

function setDefaultHiddenState(){
    const playerData = document.querySelectorAll('.player-data');
    const gameBoard = document.querySelector('.game-board');
    const resetBoardButton = document.querySelector('.reset-board-button');
    const gameContainer = document.querySelector('.game-container');
    
    playerData.forEach(player => player.classList.add('hidden'));
    if (gameBoard) gameBoard.classList.add('hidden');
    if (resetBoardButton) resetBoardButton.classList.add('hidden');
    if (gameContainer) gameContainer.classList.add('hidden');
}

function toggleHiddenState(){   
    // Change default hidden state to visible
    const playerData = document.querySelectorAll('.player-data');
    const gameBoard = document.querySelector('.game-board');
    const resetBoardButton = document.querySelector('.reset-board-button');
    const gameContainer = document.querySelector('.game-container');
    playerData.forEach(player => player.classList.remove('hidden'));
    gameBoard.classList.remove('hidden');
    resetBoardButton.classList.remove('hidden');

    // Change default visible state to hidden
    const namesInterface = document.querySelector('.names-interface');
    namesInterface.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

export { createNameInput, createNamesInterface, displayPlayerData, resetBoardButton, updateScore, updateCell, toggleHiddenState, setDefaultHiddenState };