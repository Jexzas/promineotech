function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x must be a string');
    }
    return x + y;
}

function catCon(x, y) {
    if (typeof x != 'string' || typeof y != 'string') {
        throw new Error('is not a cat');
    }
    return x + " is a cat and " + y + " is not";
}