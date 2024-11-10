
function findFirstRepeatingChar(str) {
  const charMap = new Map();

  for (const char of str) {
    if (charMap.has(char)) {
      return [charMap.get(char), char];
    }
    charMap.set(char, 1);
  }

  return [0, null];
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingChar("programmingr"))} [char->correct]: [count->incorrect]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingChar("promgramming"))} [char->correct]: [count->incorrect]`);