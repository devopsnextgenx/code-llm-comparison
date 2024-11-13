
function getRepeatedCharacterCount(str) {
  let repeatedChar = "";
  let count = 0;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      repeatedChar = str[i];
      count++;
    }
  }

  return count;
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(getRepeatedCharacterCount("programmingr"))} [char->NA]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(getRepeatedCharacterCount("promgramming"))} [char->NA]: [count->correct]`);