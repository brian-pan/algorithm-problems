//Q: The Hashtag Generator - 5kyu

//Instructions:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//solution:
function generateHashtag(str) {
  console.log(str);
  if (!str.trim()) {
    return false;
  }
  const wordsArray = str
    .trim()
    .split(" ")
    .filter((el) => el.trim() !== "");
  //   console.log(wordsArray)
  const letterArray = wordsArray.map((word) => {
    //     console.log(word)
    const arr = word.split("");
    //     console.log("arr:", arr)
    arr[0] = arr[0].toUpperCase();
    //     console.log(arr[0].toUpperCase())
    //     console.log("arrUpper:", arr)
    return arr.join("");
  });
  //   console.log("letterArray:", letterArray)
  letterArray.unshift("#");
  //   console.log(letterArray.join(''))
  if (letterArray.join("").length > 140) {
    console.log(letterArray.join("").length);
    return false;
  } else {
    return letterArray.join("");
  }
}

//Better Solution:
function generateHashtag(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" + str.split(" ").map(capitalize).join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
