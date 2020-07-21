// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
*/

const numeralMap = {
  [1000]: 'M',
  [500]: 'D',
  [100]: 'C',
  [50]: 'L',
  [10]: 'X',
  [5]: 'V',
  [1]: 'I',
};

const numKeyArr = [1000, 500, 100, 50, 10, 5, 1];

const nineValues = {
  [4]: 'MMMMMMMMM',
  [3]: 'CM',
  [2]: 'XC',
  [1]: 'IX',
};

const fourValues = {
  [4]: 'MMMM',
  [3]: 'CD',
  [2]: 'XL',
  [1]: 'IV',
};

const getNumerals = (remainder, numeral = '') => {
  const foundKey = numKeyArr.find(numKey => remainder - numKey >= 0);
  if (!foundKey) {
    return numeral;
  }
  remainder = remainder - foundKey;
  numeral = `${numeral}${numeralMap[foundKey]}`;
  return getNumerals(remainder, numeral);
};

const toRomanSimple = strNum => {
  const intNum = parseInt(strNum);
  const firstDigit = parseInt(strNum[0]);
  const len = strNum.length;
  if (intNum === 0) {
    return '';
  }
  if (firstDigit === 4) {
    return fourValues[len];
  } else if (firstDigit === 9) {
    return nineValues[len];
  } else {
    return getNumerals(intNum);
  }
};

const toRomanNumeral = num =>
  ('' + num)
    .split('')
    .reverse()
    .map((num, i) => num.padEnd(i + 1, '0'))
    .map(toRomanSimple)
    .reverse()
    .join('');

console.log(toRomanNumeral(2008));
