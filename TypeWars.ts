function getSum(a: number, b: number): number {
  let values: number[] = [a, b];
  let minVal = a < b ? a : b;
  let maxVal = a > b ? a : b;

  for (minVal; minVal < maxVal - 1; minVal++) {
    values.push(minVal + 1);
  }

  return a != b ? values.reduce((acc, curr) => acc + curr) : a;
}

// console.log(getSum(-3,-3))

///////////////////////////////////////////////////////////////

function findShort(s: string): number {
  let words: string[] = s.trim().split(" ");
  let shortestLength: number = words[0].length;
  for (let i of words) i.length < shortestLength && (shortestLength = i.length);
  return shortestLength;
}

// console.log(findShort(' Hola mama esta e una funcion muy pete'))

////////////////////////////////////////////////////////////////////

function repeater(str: string, n: number): string {
  return str.repeat(n);
}

// console.log(repeater('pete', 4))

//////////////////////////////////////////////////

function reverseWords(str: string): string {
  let result: string[] = [];
  const words: string[] = str.split(" ");
  for (let i of words) {
    result.push(i.split("").reverse().join("") + " ");
  }
  return result.join("").trim();
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

////////////////////////////////////////////////////////

function narcissistic(value: number): boolean {
  const result = [...value.toString()].reduce((acc, curr, i, arr) => {
    return Number(curr) ** arr.length + acc;
  }, 0);
  return value === result ? true : false;
}

// console.log(narcissistic(1534))

/////////////////////////////////////////////////////////////

const isPangram = (phrase: string): boolean => {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  for (let letter of alphabet) {
    if (phrase.toLowerCase().includes(letter)) { 
      continue
    } else return false 
  }
  return true;
};

// console.log(isPangram('abcdefghiklmnopqrstuvwxyz'))

/////////////////////////////////////////////////////////////

function descendingOrder(n: number): number {
  type StNum = string | number
  return Number([...n.toString()].sort(
    (a: StNum , b: StNum) => +b - +a ).join(''))
}

// console.log(descendingOrder(363453))

/////////////////////////////////////////////////////////////////

// export function order(words:string):string {
//   words.split(' ').sort(
//     (a, b) => a
//   )
//   return ''
//}


const test: (string|number)[] = [1, 2, 3, 4, 5, 6];
test.splice(4, 1, 'asd');
console.log(test);
console.log('asd7d'.match(/\d/)[0]);