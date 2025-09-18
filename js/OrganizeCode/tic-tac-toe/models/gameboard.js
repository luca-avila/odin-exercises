const gameboard = (() => {
     const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
     ];

     function checkEmptyness(row, column) {
        return board[row][column] === null;
     }

     function placeMarker(row, column, marker) {
        board[row][column] = marker;
     }

     function getBoardState() {
        return board;
     }

     function resetBoard(){
        board.forEach(row => row.fill(null));
     }
     
     return { checkEmptyness, placeMarker, getBoardState, resetBoard }
})();

export { gameboard };