function createCellClickListener(cell) {
    cell.addEventListener('click', () => {
        const row = cell.dataset.row;
        const column = cell.dataset.column;
        console.log(`row: ${row}, column: ${column}`);
    });
}

export { createCellClickListener };