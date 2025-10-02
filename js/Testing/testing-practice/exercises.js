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

class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static divide(a, b) {
        return a / b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
export { capitalize, reverseString, Calculator };
