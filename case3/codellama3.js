
function getLastRepeatingChar(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }
  let lastRepeatingChar = "";
  let maxCount = 0;
  for (const [key, value] of Object.entries(charCount)) {
    if (value > maxCount) {
      maxCount = value;
      lastRepeatingChar = key;
    }
  }
  return `${lastRepeatingChar} (${maxCount})`;
}

console.log(`Last repeated char and count`);
console.log(`programmingr: ${JSON.stringify(getLastRepeatingChar("programmingr"))} [char->correct]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(getLastRepeatingChar("promgramming"))} [char->incorrect]: [count->incorrect]`);
