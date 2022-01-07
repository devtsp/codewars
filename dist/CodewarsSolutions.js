"use strict";
// 1) Remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
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
}
console.log("1)", arrayDiff([1, 1, 2, 2, 2, 3], [2]));
// 2) Return the number (count) of vowels of a given string.
function getCount(str) {
    let vowelsCount = 0;
    const vowels = "aeiou";
    for (let i of str) {
        vowels.includes(i) && (vowelsCount += 1);
    }
    return vowelsCount;
}
console.log("2)", getCount("Murcielago"));
// 3) If a member is +54 years old and has a handicap grater than 7: Senior. Otherwise: Open. First arg will be age and second handicap. Input will be a list of pairs, output will be a list of categories in correspondent order
function openOrSenior(data) {
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
}
console.log("3)", openOrSenior([
    [1, 3],
    [56, 8],
]));
// 4) Given an array of ones and zeroes, convert the equivalent binary value to an integer.
function binaryArrayToNumber(arr) {
    return parseInt(arr.join(""), 2);
}
console.log("4)", binaryArrayToNumber([0, 1, 1, 1]));
// 5) Square every digit of a number and concatenate them. Ej: i: 23/ o: 421
function squareDigits(num) {
    const partial = [];
    for (let i of num.toString()) {
        partial.push((+i) ** 2);
    }
    return +partial.join("");
}
console.log("5)", squareDigits(23));
// 6) Convert a string to a new string where each character that is repeated appears between brackets
function duplicateEncode(word) {
    const chars = [...word.toLowerCase()];
    let count = {};
    chars.forEach((char) => {
        count[char] ? count[char]++ : (count[char] = 1);
    });
    const repeatedChars = Object.keys(count).filter((key) => count[key] > 1);
    return chars
        .map((char) => (repeatedChars.includes(char) ? `(${char})` : char))
        .join("");
}
console.log("6)", duplicateEncode("Repetition"));
// 7) Given two integers (could be positive or negative), find the sum of all the integers between and including them and return it.
function getSum(a, b) {
    let values = [a, b];
    let minVal = a < b ? a : b;
    let maxVal = a > b ? a : b;
    for (minVal; minVal < maxVal - 1; minVal++) {
        values.push(minVal + 1);
    }
    return a !== b ? values.reduce((acc, curr) => acc + curr) : a;
}
console.log("7)", getSum(-3, 0));
// 8) Given a string of words, return the length of the shortest word(s).
function findShort(s) {
    let words = s.trim().split(" ");
    let shortestLength = words[0].length;
    for (let i of words)
        i.length < shortestLength && (shortestLength = i.length);
    return shortestLength;
}
console.log("8)", findShort("This is an example"));
// 9) Reverse each word in a given string. All spaces in the string should be retained.
function reverseWords(str) {
    const result = [];
    const words = str.split(" ");
    for (let i of words) {
        result.push([...i].reverse().join(" "));
    }
    return result.join(" ");
}
console.log("9)", reverseWords("The quick brown fox jumps over the lazy dog."));
// 10) Return true or false depending upon whether the given number is a Narcissistic (a positive number which is the sum of its own digits, each raised to the power of the number of its own digits)
function narcissistic(value) {
    const result = [...value.toString()].reduce((acc, curr, i, arr) => (+curr) ** arr.length + acc, 0);
    return value === result ? true : false;
}
console.log("10)", narcissistic(153));
// 11) Given a string, detect whether or not it is a pangram (contains every single letter of the alphabet) via true or false
function isPangram(phrase) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let letter of alphabet) {
        if (phrase.toLowerCase().includes(letter)) {
            continue;
        }
        else
            return false;
    }
    return true;
}
console.log("11)", isPangram("abcdefghiklmnopqrstuvwxyz"));
// 12) Given a non-negative integer as an argument return it with its digits in descending order
const descendingOrder = (n) => {
    return +[...n.toString()].sort((a, b) => +b - +a).join("");
};
console.log("12)", descendingOrder(363453));
// 13) Sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
function order(words) {
    return words
        .split(" ")
        .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
        .join(" ");
}
console.log("13)", order("2b 1a 4d 3c"));
// 14)
// Input A "stock": ["ABCT 2", "BCD 4", "BXZGT 1"]
// Input B "categories": ["B", "G", "A"]
// Espected Output: "(B : 5) - (G : 0) - (A : 2)"
// If Input A or B === [] return ''
function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) {
        return "";
    }
    let helperObj = {};
    for (let i of listOfArt) {
        helperObj[i[0]]
            ? (helperObj[i[0]] += +i.match(/\d+/))
            : (helperObj[i[0]] = +i.match(/\d+/));
    }
    let helperArr = [];
    for (let i of listOfCat) {
        helperArr.push(`(${i} : ${helperObj[i] || "0"})`);
    }
    return helperArr.join(" - ");
}
console.log("14)", stockList(["D 56"], ["A", "B", "C", "D"]));
// 15) Given two arrays a and b checks via true or false whether the two arrays have the "same" elements, with the same multiplicities (appearences). "Same" means here that the elements in b are the elements in a squared, regardless of the order.
function comp(a1, a2) {
    if (a1 === null || a2 === null)
        return false;
    let rootsquaredArray = [];
    for (let i of a2) {
        rootsquaredArray.push(Math.sqrt(i));
    }
    const check = a1.sort((a, b) => a - b).join() ===
        rootsquaredArray.sort((a, b) => a - b).join();
    return check;
}
console.log("15)", comp([], []));
// 16) Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
//Examples:
//findNb(1071225) --> 45
//findNb(91716553919377) --> -1
function findNb(totVol) {
    let volAccumulator = 0;
    let cubeCounter = 0;
    for (; volAccumulator < totVol;) {
        cubeCounter++;
        volAccumulator += cubeCounter ** 3;
    }
    return volAccumulator === totVol ? cubeCounter : -1;
}
console.log("16)", findNb(1071225));
// 17)  Fold a given array of integers by the middle (from right to left) x-times.
// Ex: [1, 2, 1, 4, 1] ->fold-> [2, 6, 1] ->fold-> [3, 6] ->fold-> [9]
function foldArray(array, runs) {
    const toFold = [...array];
    const foldedArray = [];
    for (; toFold.length > 1;) {
        foldedArray.push(toFold.shift() + toFold.pop());
    }
    toFold.length ? foldedArray.push(toFold.pop()) : toFold;
    runs--;
    return runs ? foldArray(foldedArray, runs) : foldedArray;
}
console.log("17)", foldArray([12, 13, 454, 36, 56, 56, 7, 9, 54, 100, 2345, 12], 1));
// 18) Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.
function high(str) {
    const alph = "0abcdefghijklmnopqrstuvwxyz";
    const words = str.toLowerCase().split(" ");
    const wordsScores = [];
    for (let word of words) {
        let wordScore = 0;
        [...word].forEach((letter) => {
            wordScore += alph.indexOf(letter);
        });
        wordsScores.push(wordScore);
    }
    words.sort((a, b) => wordsScores[words.indexOf(b)] - wordsScores[words.indexOf(a)]);
    return words[0];
}
console.log("18)", high("Hello my name is xyz"));
// 19) Given a string, the first letter must be converted to its ASCII code and second letter must be switched with the last letter. ej: encryptThis "hello world" == "104olle 119drlo"
function encryptThis(str) {
    let toEncrypt = str.split(" ");
    let encryptedPhrase = [];
    for (let word of toEncrypt) {
        let encryptedWord = [];
        encryptedWord.push(word.charCodeAt(0).toString(), word.length > 1 ? word.slice(-1) : "", word.length === 3
            ? word[1]
            : word.length > 3
                ? word.slice(2, word.length - 1) + word[1]
                : "");
        encryptedPhrase.push(encryptedWord.join(""));
    }
    return str.trim() && encryptedPhrase.join(" ");
}
console.log("19)", encryptThis("Succesfully encrypted message"));
//__________________________________________________________________________________________________________
// Other less-verbose approach: replace() using RegEX + callback
// RegEx:       /\b(\S)(\S?)(\S*?)(\S?)\b/g
// Callback:    (_, a, b, c, d) => `${a.charCodeAt(0)}${d}${c}${b}`
// replace:     str.replace( /\b(\S)(\S?)(\S*?)(\S?)\b/g , (_, a, b, c, d)=>`${a.charCodeAt(0)}${d}${c}${b}` )
// When we use a callback on replace we get 5 arg fields to work with:
//    1) the matched substring,
//    2) [c1, c2, c3..] = each RegEx capture group between (),
//    3) The offset (index start) of matched sub-string,
//    4) The whole string examined,
//    5) Object with {[group-names] : [matched-substring]} pairs
// In our case we take the matched substring (_) although we wont use it, to later recieve the 4 capture groups (a,b,c,d) nad work with them on a template literal
//___________________________________________________________________________________________________________
// 20) A function that deciphers encrypted messages from last function
function decipherThis(str) {
    return str.replace(/\b(\d+)(\S?)(\S*?)(\S?)\b/g, (_, a, b, c, d) => `${String.fromCharCode(a)}${d}${c}${b}`);
}
console.log("20)", decipherThis("83yccesfullu 101dcrypten 109essage"));
// 21) Given a Roman numeral return its value as a numeric decimal integer.
function solution(roman) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let decimal = 0;
    let previous = 0;
    for (let rlt of [...roman].reverse()) {
        values[rlt] >= previous
            ? (decimal += values[rlt])
            : (decimal -= values[rlt]);
        previous = values[rlt];
    }
    return decimal;
}
console.log("21)", solution("XXI"));
// 22) Given an array of intervals, return the sum of all the interval lengths. Overlapping intervals should only be counted once. eg:
// [[1,4],[7, 10],[3, 5]] The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
function sumOfIntervals(intervals) {
    const aux = [];
    for (let int of intervals) {
        const interval = [];
        while (int[0] < +int.slice(-1)) {
            interval.push(int[0]);
            int[0]++;
        }
        aux.push(...interval);
    }
    const set = new Set(aux);
    return set.size;
}
console.log("22)", sumOfIntervals([[1, 3], [3, 5], [8, 11], [7, 10],]));
