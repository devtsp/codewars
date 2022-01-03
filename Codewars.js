const log = (s) => {
  console.log(s);
}

///////////////////

const arrayDiff = (a,b) => {
  if (a.length && b.length) {
    for (let i = 0; i < a.length;) {
      if (b.join().includes(a[i].toString())) {
        a.splice(i, 1);   
        continue;
      }
      i += 1; 
    }
  } 
  return a
}

let a = [1,1,1,1,2,2,2,2,2,1]
let b = [2]


// arrayDiff(a,b);

// console.log(a);

///////////////////////////////////////////////////////////////////////////////////

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i of str) {
    vowels.includes(i) && (vowelsCount += 1);
  }
  return vowelsCount;
}

// console.log(getCount('A mi vaca lola le puse un moño'));

//////////////////////////////////////////////////////////////////////////////////

const openOrSenior= (data) => {
  const category = [];
  for (let i of data) {
    if (i[0] >= 55 && i[1] > 7) {
      category.push('Senior');
    } else {
      category.push('Open');
    };
  }
  return category;
}

// console.log(openOrSenior([[1,3], [56,8]]));

//////////////////////////////////////////////////////////////////////////////////////

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};

// console.log(binaryArrayToNumber([0,1,1,1]));

/////////////////////////////////////////////////////////////////////////////////

function squareDigits(num){
  const res = [];
  for (let i of (num).toString()) {
    res.push(i**2);
  }
  return Number(res.join(''))
}

// log(squareDigits(24))

/////////////////////////////////////////////////////////////////////////////////

function duplicateEncode(word) {
  const chars = word.toLowerCase().split('');
  const count = {};
  chars.forEach((char) => count[char] ? count[char]++ : count[char] = 1);
  const repeatedChars = Object.keys(count).filter((key) => count[key] > 1);
  return chars.map((char) => repeatedChars.includes(char) ? ')' : '(').join('');
}
  
// log(duplicateEncode('din'));






