"use strict";
// 1) Remove all values from list a, which are present in list b keeping their order.
const arrayDiff = (a, b) => {
    if (a.length && b.length) {
        for (let i = 0; i < a.length;) {
            if (b.includes(a[i])) {
                a.splice(i, 1);
                continue;
            }
            i += 1;
        }
    }
    return a;
};
console.log("1)", arrayDiff([1, 1, 2, 2, 2, 3], [2]));
// 2) Return the number (count) of vowels of a given string.
const getCount = (str) => {
    let vowelsCount = 0;
    const vowels = "aeiou";
    for (let i of str) {
        vowels.includes(i) && (vowelsCount += 1);
    }
    return vowelsCount;
};
console.log("2)", getCount("Murcielago"));
// 3) If a member is +54 years old and has a handicap grater than 7: Senior. Otherwise: Open. First arg will be age and second handicap. Input will be a list of pairs, output will be a list of categories in correspondent order
const openOrSenior = (data) => {
    const categorized = [];
    for (let i of data) {
        if (i[0] >= 55 && i[1] > 7) {
            categorized.push("Senior");
        }
        else {
            categorized.push("Open");
        }
    }
    return categorized;
};
console.log("3)", openOrSenior([
    [1, 3],
    [56, 8],
]));
// 4) Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = (arr) => {
    return parseInt(arr.join(""), 2);
};
console.log("4)", binaryArrayToNumber([0, 1, 1, 1]));
// 5) Square every digit of a number and concatenate them. Ej: i: 23/ o: 421
const squareDigits = (num) => {
    const partial = [];
    for (let i of num.toString()) {
        partial.push((+i) ** 2);
    }
    return +partial.join("");
};
console.log("5)", squareDigits(23));
// 6) Convert a string to a new string where each character that is repeated appears between brackets
const duplicateEncode = (word) => {
    const chars = [...word.toLowerCase()];
    let count = {};
    chars.forEach((char) => {
        count[char] ? count[char]++ : (count[char] = 1);
    });
    const repeatedChars = Object.keys(count).filter((key) => count[key] > 1);
    return chars
        .map((char) => (repeatedChars.includes(char) ? `(${char})` : char))
        .join("");
};
console.log("6)", duplicateEncode("Repetition"));
// 7) Given two integers (could be positive or negative), find the sum of all the integers between and including them and return it.
const getSum = (a, b) => {
    let values = [a, b];
    let minVal = a < b ? a : b;
    let maxVal = a > b ? a : b;
    for (minVal; minVal < maxVal - 1; minVal++) {
        values.push(minVal + 1);
    }
    return a !== b ? values.reduce((acc, curr) => acc + curr) : a;
};
console.log("7)", getSum(-3, 0));
// 8) Given a string of words, return the length of the shortest word(s).
const findShort = (s) => {
    let words = s.trim().split(" ");
    let shortestLength = words[0].length;
    for (let i of words)
        i.length < shortestLength && (shortestLength = i.length);
    return shortestLength;
};
console.log("8)", findShort("This is an example"));
// 9) Reverse each word in a given string. All spaces in the string should be retained.
const reverseWords = (str) => {
    const result = [];
    const words = str.split(" ");
    for (let i of words) {
        result.push([...i].reverse().join(" "));
    }
    return result.join(" ");
};
console.log("9)", reverseWords("The quick brown fox jumps over the lazy dog."));
// 10) Return true or false depending upon whether the given number is a Narcissistic (a positive number which is the sum of its own digits, each raised to the power of the number of its own digits)
const narcissistic = (value) => {
    const result = [...value.toString()].reduce((acc, curr, i, arr) => (+curr) ** arr.length + acc, 0);
    return value === result ? true : false;
};
console.log("10)", narcissistic(153));
// 11) Given a string, detect whether or not it is a pangram (contains every single letter of the alphabet) via true or false
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
console.log("11)", isPangram("abcdefghiklmnopqrstuvwxyz"));
// 12) Given a non-negative integer as an argument return it with its digits in descending order
const descendingOrder = (n) => {
    return +[...n.toString()].sort((a, b) => +b - +a).join("");
};
console.log("12)", descendingOrder(363453));
// 13) Sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
const order = (words) => {
    return words
        .split(" ")
        .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
        .join(" ");
};
console.log("13)", order("2b 1a 4d 3c"));
