import { gameboard as board} from './gameboard.js';

const game = (() => {
    const gameboard = board;
    const players = {
        player1: null,
        player2: null
    };
    let currentPlayer = players.player1;

    function checkWin() {
        const board = gameboard.getBoardState();

        if (
            checkRow(board[0]) ||
            checkRow(board[1]) ||
            checkRow(board[2]) ||
            checkColumn(0) ||
            checkColumn(1) ||
            checkColumn(2) ||
            checkDiagonal()
        ) {
            currentPlayer.addWin();
            return true;
        }
        
    }

    function checkRow(row){
        const firstCell = row[0];
        return firstCell !== null && row.every(cell => cell === firstCell);
    }

    function checkColumn(col){
        const column = gameboard.getBoardState().map(row => row[col]);
        const firstCell = column[0];

        return firstCell !== null && column.every(cell => cell === firstCell);
    }

    function checkDiagonal(){
        const board = gameboard.getBoardState();

        // If the center cell is empty, there can't be a winner
        if (board[1][1] === null) {
            return false;
        }

        return (
            board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
            board[0][2] === board[1][1] && board[1][1] === board[2][0]
        )
    }

    function checkTie(){
        const board = gameboard.getBoardState();
        return board.every(row => row.every(cell => cell !== null));
    }

    function resetGame(){
        gameboard.resetBoard();
        currentPlayer = players.player1;
    }

    function getGameStatus(){
        return gameboard.getBoardState();
    }

    function getCurrentPlayer(){
        return currentPlayer;
    }

    function makeMove(row, column){
        if (gameboard.checkEmptyness(row, column)) {
            gameboard.placeMarker(row, column, currentPlayer.marker);
            
            currentPlayer = currentPlayer === players.player1 ? players.player2 : players.player1;

            return true; // Successfully made a move
        }
        return false; // Invalid move
    }

    function setPlayers(player1, player2){
        players.player1 = player1;
        players.player2 = player2;
        currentPlayer = players.player1; // Set the current player to player1
    }

    return { 
        players, 
        gameboard, 
        makeMove, 
        getCurrentPlayer, 
        checkWin, 
        checkTie,
        getGameStatus,
        resetGame,
        setPlayers
    };
})();

export { game };