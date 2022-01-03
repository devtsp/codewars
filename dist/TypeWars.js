"use strict";
function getSum(a, b) {
    let values = [a, b];
    let minVal = a < b ? a : b;
    let maxVal = a > b ? a : b;
    for (minVal; minVal < maxVal - 1; minVal++) {
        values.push(minVal + 1);
    }
    return a != b ? values.reduce((acc, curr) => acc + curr) : a;
}
// console.log(getSum(-3,-3))
///////////////////////////////////////////////////////////////
function findShort(s) {
    let words = s.trim().split(" ");
    let shortestLength = words[0].length;
    for (let i of words)
        i.length < shortestLength && (shortestLength = i.length);
    return shortestLength;
}
// console.log(findShort(' Hola mama esta e una funcion muy pete'))
////////////////////////////////////////////////////////////////////
function repeater(str, n) {
    return str.repeat(n);
}
// console.log(repeater('pete', 4))
//////////////////////////////////////////////////
function reverseWords(str) {
    let result = [];
    const words = str.split(" ");
    for (let i of words) {
        result.push(i.split("").reverse().join("") + " ");
    }
    return result.join("").trim();
}
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
////////////////////////////////////////////////////////
function narcissistic(value) {
    const result = [...value.toString()].reduce((acc, curr, i, arr) => {
        return Number(curr) ** arr.length + acc;
    }, 0);
    return value === result ? true : false;
}
// console.log(narcissistic(1534))
/////////////////////////////////////////////////////////////
const isPangram = (phrase) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let letter of alphabet) {
        if (phrase.toLowerCase().includes(letter)) {
            continue;
        }
        else
            return false;
    }
    return true;
};
// console.log(isPangram('abcdefghiklmnopqrstuvwxyz'))
/////////////////////////////////////////////////////////////
function descendingOrder(n) {
    return Number([...n.toString()].sort((a, b) => +b - +a).join(''));
}
// console.log(descendingOrder(363453))
/////////////////////////////////////////////////////////////////
// export function order(words:string):string {
//   words.split(' ').sort(
//     (a, b) => a
//   )
//   return ''
//}
const test = [1, 2, 3, 4, 5, 6];
test.splice(4, 1, 'asd');
console.log(test);
console.log('asd7d'.match(/\d/)[0]);
