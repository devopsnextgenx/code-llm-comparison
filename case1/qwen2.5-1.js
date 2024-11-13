function findFirstRepeatingCharacterCount(str) {
  const charCount = new Map();

  for (let i = 0; i < str.length; i++) {
    if (charCount.has(str[i])) {
      return charCount.get(str[i]) + 1;
    } else {
      charCount.set(str[i], 1);
    }
  }

  return -1; // No repeating character found
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingCharacterCount("programmingr"))} [char->NA]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingCharacterCount("promgramming"))} [char->NA]: [count->correct]`);