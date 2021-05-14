const vowels = ["a", "e", "i", "o", "u", "y"];
const notVowels = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

function removeEndPunctuation(word) {
  let lasts = [];
  while (!vowels.includes(word[word.length - 1]) && !notVowels.includes(word[word.length - 1])) {
    let last = word[word.length - 1];
    lasts.push(last);
    word = word.slice(0, -1);
  }
  return [lasts, word];
}

function translateWord(word) {
  let extra = "";
  if (word.includes("'")) {
    let splitted = word.split("'");
    extra = splitted[1];
    word = splitted[0];
  }
  let multipleReturns = removeEndPunctuation(word);
  let lasts = multipleReturns[0];
  word = multipleReturns[1];
  let last = word[word.length - 1];
  word = word.slice(0, -1);
  if (vowels.includes(last)) word = word + "egg";
  else word = word + "egge";
  word = word + last;
  if (extra != "") word = word + "'" + extra;
  if (lasts.length > 0) {
    for (let item of lasts) {
      word = word + item;
    }
  }
  return word;
}

function englishToEgglish(content) {
  let words = content.split(" ");
  let translatedArray = [];
  for (let word of words) {
    translatedArray.push(translateWord(word));
  }
  let translated = translatedArray.join(" ");
  return translated;
}
