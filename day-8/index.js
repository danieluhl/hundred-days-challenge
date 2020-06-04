// sentence
// lowercase words at the start asc
// upper case words end desc

const UPPER = 'upper';
const LOWER = 'lower';
const wordCache = new Map();

const startsWithUpperCase = word => {
  if (!wordCache.get(word)) {
    const startingLetter = word.charCodeAt(0);
    if (startingLetter <= 90 && startingLetter >= 65) {
      wordCache.set(word, UPPER);
    } else if (startingLetter <= 122 && startingLetter >= 97) {
      wordCache.set(word, LOWER);
    } else {
      // if not upper or lower
      return false;
    }
  }

  if (wordCache.get(word) === UPPER) {
    return true;
  }
};

const startsWithLowerCase = word =>
  word.charCodeAt(0) <= 122 && word.charCodeAt(0) >= 97;

const sortSentenceWords = sentence => {
  const sentenceArray = sentence.split(' ');
  const upperCaseWords = sentenceArray.filter(startsWithUpperCase);
  const lowerCaseWords = sentenceArray.filter(startsWithLowerCase);

  return [...lowerCaseWords.sort(), ...upperCaseWords.sort().reverse()].join(
    ' '
  );
};

const sentence =
  'this is some Sentence That I think should Be sorted in a nice way And Stuff.';

console.log(sortSentenceWords(sentence));
