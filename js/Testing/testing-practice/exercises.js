function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let reversed = '';
    const strLength = str.length;

    for (let i = strLength - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

export { capitalize, reverseString };
