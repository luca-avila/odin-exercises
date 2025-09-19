function createCellClickListener(cell) {
    cell.addEventListener('click', () => {
        console.log('Cell clicked', cell);
    });
}

export { createCellClickListener };