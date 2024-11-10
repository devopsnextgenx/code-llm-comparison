
function findRepeatedChar(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  let maxCount = 0;
  let repeatedChar = "";
  for (let [char, count] of Object.entries(charCount)) {
    if (count > maxCount) {
      maxCount = count;
      repeatedChar = char;
    }
  }
  return { repeatedChar, repeatCount: maxCount };
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findRepeatedChar("programmingr"))} [char->correct]: [count->incorrect]`);
console.log(`promgramming: ${JSON.stringify(findRepeatedChar("promgramming"))} [char->incorrect]: [count->incorrect]`);