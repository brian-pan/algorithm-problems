//Q: First non-repeating character - 5kyu

// DESCRIPTION:
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

//Solution:
function firstNonRepeatingLetter(s) {
  console.log(s);
  if (!s) {
    return "";
  }
  if (s.length === 1) {
    return s;
  }
  const tally = {};
  const originalArr = s.toLowerCase().split("");
  originalArr.forEach((char) => {
    if (tally[char] === undefined) {
      tally[char] = 1;
    } else {
      tally[char]++;
    }
  });
  const resultArr = Object.keys(tally).filter((key) => tally[key] === 1);
  if (resultArr.length === 0) return "";
  const indexArr = resultArr.map((key) => {
    return s.indexOf(key) === -1
      ? s.indexOf(key.toUpperCase())
      : s.indexOf(key);
  });
  return s[Math.min(...indexArr)];
}

//Better Solution 1:
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
