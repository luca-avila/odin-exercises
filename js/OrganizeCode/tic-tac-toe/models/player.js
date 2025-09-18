function createPlayer(name) {
    let wins = 0;
    const getWins = () => wins;
    const addWin = () => wins++;

    return { name, getWins, addWin };
}

export { createPlayer };