function findLastRepeatingCharacter(str) {
  const charCount = {};
  
  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  
  let lastRepeatingChar = null;
  let maxRepeatCount = 0;
  
  // Find the last repeating character with the maximum repeat count
  for (let i = str.length - 1; i >= 0; i--) {
    if (charCount[str[i]] > 1) {
      lastRepeatingChar = str[i];
      maxRepeatCount = charCount[str[i]];
      break;
    }
  }
  
  return { character: lastRepeatingChar, count: maxRepeatCount };
}

console.log(`Last repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findLastRepeatingCharacter("programmingr"))} [char->correct]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(findLastRepeatingCharacter("promgramming"))} [char->correct]: [count->correct]`);