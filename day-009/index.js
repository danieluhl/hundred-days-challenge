// sentence
// lowercase words at the start asc
// upper case words end desc

const UPPER = 'upper';
const LOWER = 'lower';

const getCase = word => {
  const startingLetter = word.charCodeAt(0);
  if (startingLetter <= 90 && startingLetter >= 65) {
    return UPPER;
  } else if (startingLetter <= 122 && startingLetter >= 97) {
    return LOWER;
  }
  // :shrug_emoji:
  return LOWER;
};

const buildCache = sentence => {
  const sentenceMap = new Map();
  sentence.split(' ').forEach(word => {
    if (!sentenceMap.has(word)) {
      sentenceMap.set(word, getCase(word));
    }
  });
  return sentenceMap;
};

const sortSentenceWords = sentence => {
  const wordCache = buildCache(sentence);
  const upperCaseWords = [],
    lowerCaseWords = [];
  wordCache.forEach((value, key) => {
    if (value === UPPER) {
      upperCaseWords.push(key);
    } else if (value === LOWER) {
      lowerCaseWords.push(key);
    }
  });

  return [...lowerCaseWords.sort(), ...upperCaseWords.sort().reverse()].join(
    ' '
  );
};

const sentence =
  'this is some Sentence That I think should Be sorted in a nice way And Stuff.';

console.log(sortSentenceWords(sentence));
