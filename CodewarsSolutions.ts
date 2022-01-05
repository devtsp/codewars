// 1) Remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a: number[], b: number[]): number[] {
  if (a.length && b.length) {
    for (let i = 0; i < a.length; ) {
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

function getCount(str: string) {
  let vowelsCount: number = 0;
  const vowels: string = "aeiou";
  for (let i of str) {
    vowels.includes(i) && (vowelsCount += 1);
  }
  return vowelsCount;
}
console.log("2)", getCount("Murcielago"));

// 3) If a member is +54 years old and has a handicap grater than 7: Senior. Otherwise: Open. First arg will be age and second handicap. Input will be a list of pairs, output will be a list of categories in correspondent order

function openOrSenior(data: Array<[Number, Number]>): string[] {
  const categorized: string[] = [];
  for (let i of data) {
    if (i[0] >= 55 && i[1] > 7) {
      categorized.push("Senior");
    } else {
      categorized.push("Open");
    }
  }
  return categorized;
}
console.log(
  "3)",
  openOrSenior([
    [1, 3],
    [56, 8],
  ])
);

// 4) Given an array of ones and zeroes, convert the equivalent binary value to an integer.

function binaryArrayToNumber(arr: number[]): number {
  return parseInt(arr.join(""), 2);
}
console.log("4)", binaryArrayToNumber([0, 1, 1, 1]));

// 5) Square every digit of a number and concatenate them. Ej: i: 23/ o: 421

function squareDigits(num: number): number {
  const partial = [];
  for (let i of num.toString()) {
    partial.push((+i) ** 2);
  }
  return +partial.join("");
}
console.log("5)", squareDigits(23));

// 6) Convert a string to a new string where each character that is repeated appears between brackets

function duplicateEncode(word: string): string {
  const chars: string[] = [...word.toLowerCase()];
  let count: { [k: string]: number } = {};
  chars.forEach((char) => {
    count[char] ? count[char]++ : (count[char] = 1);
  });
  const repeatedChars: string[] = Object.keys(count).filter(
    (key) => count[key] > 1
  );
  return chars
    .map((char) => (repeatedChars.includes(char) ? `(${char})` : char))
    .join("");
}
console.log("6)", duplicateEncode("Repetition"));

// 7) Given two integers (could be positive or negative), find the sum of all the integers between and including them and return it.

function getSum(a: number, b: number): number {
  let values: number[] = [a, b];
  let minVal: number = a < b ? a : b;
  let maxVal: number = a > b ? a : b;
  for (minVal; minVal < maxVal - 1; minVal++) {
    values.push(minVal + 1);
  }
  return a !== b ? values.reduce((acc, curr) => acc + curr) : a;
}
console.log("7)", getSum(-3, 0));

// 8) Given a string of words, return the length of the shortest word(s).

function findShort(s: string): number {
  let words: string[] = s.trim().split(" ");
  let shortestLength: number = words[0].length;
  for (let i of words) i.length < shortestLength && (shortestLength = i.length);
  return shortestLength;
}
console.log("8)", findShort("This is an example"));

// 9) Reverse each word in a given string. All spaces in the string should be retained.

function reverseWords(str: string): string {
  const result: string[] = [];
  const words: string[] = str.split(" ");
  for (let i of words) {
    result.push([...i].reverse().join(" "));
  }
  return result.join(" ");
}
console.log("9)", reverseWords("The quick brown fox jumps over the lazy dog."));

// 10) Return true or false depending upon whether the given number is a Narcissistic (a positive number which is the sum of its own digits, each raised to the power of the number of its own digits)

function narcissistic(value: number): boolean {
  const result = [...value.toString()].reduce(
    (acc, curr, i, arr) => (+curr) ** arr.length + acc,
    0
  );
  return value === result ? true : false;
}
console.log("10)", narcissistic(153));

// 11) Given a string, detect whether or not it is a pangram (contains every single letter of the alphabet) via true or false
function isPangram(phrase: string): boolean {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  for (let letter of alphabet) {
    if (phrase.toLowerCase().includes(letter)) {
      continue;
    } else return false;
  }
  return true;
}
console.log("11)", isPangram("abcdefghiklmnopqrstuvwxyz"));

// 12) Given a non-negative integer as an argument return it with its digits in descending order

const descendingOrder: Function = (n: number): number => {
  return +[...n.toString()].sort((a, b) => +b - +a).join("");
};
console.log("12)", descendingOrder(363453));

// 13) Sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

function order(words: string): string {
  return words
    .split(" ")
    .sort((a, b) => +a.match(/\d/)! - +b.match(/\d/)!)
    .join(" ");
}
console.log("13)", order("2b 1a 4d 3c"));

// 14)
// Input A "stock": ["ABCT 2", "BCD 4", "BXZGT 1"]
// Input B "categories": ["B", "G", "A"]
// Espected Output: "(B : 5) - (G : 0) - (A : 2)"
// If Input A or B === [] return ''

function stockList(listOfArt: string[], listOfCat: string[]): string {
  if (!listOfArt.length || !listOfCat.length) {
    return "";
  }
  let helperObj: { [k: string]: number } = {};
  for (let i of listOfArt) {
    helperObj[i[0]]
      ? (helperObj[i[0]] += +i.match(/\d+/)!)
      : (helperObj[i[0]] = +i.match(/\d+/)!);
  }
  let helperArr: string[] = [];
  for (let i of listOfCat) {
    helperArr.push(`(${i} : ${helperObj[i] || "0"})`);
  }
  return helperArr.join(" - ");
}
console.log("14)", stockList(["D 56"], ["A", "B", "C", "D"]));

// 15) Given two arrays a and b checks via true or false whether the two arrays have the "same" elements, with the same multiplicities (appearences). "Same" means here that the elements in b are the elements in a squared, regardless of the order.

function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 === null || a2 === null) return false;
  let rootsquaredArray: number[] = [];
  for (let i of a2) {
    rootsquaredArray.push(Math.sqrt(i));
  }
  const check: boolean =
    a1.sort((a, b) => a - b).join() ===
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

function findNb(totVol: number): number {
  let volAccumulator: number = 0;
  let cubeCounter: number = 0;
  for (; volAccumulator < totVol; ) {
    cubeCounter++;
    volAccumulator += cubeCounter ** 3;
  }
  return volAccumulator === totVol ? cubeCounter : -1;
}
console.log("16)", findNb(1071225));

// 17)  Fold a given array of integers by the middle (from right to left) x-times.
// Ex: [1, 2, 1, 4, 1] ->fold-> [2, 6, 1] ->fold-> [3, 6] ->fold-> [9]

function foldArray(array: number[], runs: number): number[] {
  const toFold: number[] = [...array];
  const foldedArray: number[] = [];
  for (; toFold.length > 1; ) {
    foldedArray.push(toFold.shift()! + toFold.pop()!);
  }
  toFold.length ? foldedArray.push(toFold.pop()!) : toFold;
  runs--;
  return runs ? foldArray(foldedArray, runs) : foldedArray;
}
console.log(
  "17)",
  foldArray([12, 13, 454, 36, 56, 56, 7, 9, 54, 100, 2345, 12], 1)
);
