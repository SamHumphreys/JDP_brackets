const getEntries = (inputs) => {
  for (let i = 2; i < inputs.length; i ++) {
    entries.push(inputs[i]);
  };
};

function brackets(entries) {
  const findMatchingBracket = (array) => {
    //returns an array of the first opening and its closing brackets, if there
    // is no closing bracket return false
    const opening = array[0];
    const closing = [')','}',']'][['(','{','['].indexOf(opening)];
    if (closing === undefined) return false;
    return [opening, closing];
  };

  const findMatchingIndex = (array, openClose) => {
    //find how many opening brackets before the first matching closer...
    let openingIndexes = [];
    let closeIndexes = [];

    for (let i = 0; i < array.length && array[i] !== openClose[1]; i ++) {
      if (array[i] === openClose[0]) openingIndexes.push(i);
    };
    const lastOpeningIndex = openingIndexes[openingIndexes.length - 1];

    for (let i = lastOpeningIndex + 1; i < array.length && closeIndexes.length < openingIndexes.length; i ++) {
      if (array[i] === openClose[1]) closeIndexes.push(i);
    };

    if (openingIndexes.length !== closeIndexes.length) return false;

    return [0, closeIndexes[closeIndexes.length - 1]];
  };

  const isMirror = (array) => {
    //initial auto true and false situations:
    //  entry is empty return true
    if (array.length === 0) return true;
    //  there are an odd number of characters return false
    if (array.length % 2 !== 0) return false;
    //  the first character is not an opening bracket return false
    if (['(','{','['].indexOf(array[0]) === -1) return false;

    //find the first bracket and its matching closing bracket, if there's no
    // closing bracket return false
    const openClose = findMatchingBracket(array);
    if (openClose === false) return false;

    //find the index of the matching brackets (ie, '()' = [0,1], '(())' = [0,3])
    const matchingIndex = findMatchingIndex(array, openClose);
    if (matchingIndex === false) return false;

    //get the first substring, and set the excess to remainder
    const subStr = array.slice(1, matchingIndex[1]);
    const remainder = array.slice(matchingIndex[1] + 1, array.length);

    if (isMirror(subStr) !== true || isMirror(remainder) !== true) {
      return false;
    };

    return true;
  };

  //for each input, run the test and log 'YES' or 'NO'
  for (let i = 0; i < entries.length; i ++) {
    if (entries[i].length === 0) {
      console.log('That is an empty string, so yeah, I guess it is mirrored');
    } else if (isMirror(entries[i].split(''))) {
      console.log('YES');
    } else console.log('NO');
  };
};

let entries = [];
getEntries(process.argv);
if (entries.length === 0) {
  entries = ['[](){}', '({})()', '({)}'];
};
brackets(entries);
