/* A for Rock, B for Paper, C for Scissors
   X for Rock, Y for Paper, Z for Scissors

   score - loss: 0, draw: 3, win:  6
*/

function match([p1, p2]) {
    if (p1 === 'A') {
        if (p2.trim() === 'X') return 1 + 3;
        if (p2.trim() === 'Y') return 2 + 6;
        if (p2.trim() === 'Z') return 3 + 0;
    }
    if (p1 === 'B') {
        if (p2 === 'X') return 1 + 0;
        if (p2 === 'Y') return 2 + 3;
        if (p2 === 'Z') return 3 + 6;
    }
    if (p1 === 'C') {
        if (p2 === 'X') return 1 + 6;
        if (p2 === 'Y') return 2 + 0;
        if (p2 === 'Z') return 3 + 3;
    }
}

function one (input) {
    return input.split('\n').reduce((acc, el) => acc + match(el.trim().split(' ')), 0);
}

module.exports = {
    match,
    one
}