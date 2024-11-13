function findFirstRepeatingChar(str) {
  const charCount = {};
  
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] > 1) {
      return { char: str[i], count: charCount[str[i]] };
    }
  }
  
  return null;
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingChar("programmingr"))} [char->correct]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingChar("promgramming"))} [char->correct]: [count->correct]`);