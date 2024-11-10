
function findFirstRepeatingCharacter(str) {
  const charMap = new Map();

  for (const char of str) {
    if (charMap.has(char)) {
      return charMap.get(char);
    } else {
      charMap.set(char, 1);
    }
  }

  return null;
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingCharacter("programmingr"))} [char->incorrect]: [count->incorrect]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingCharacter("promgramming"))} [char->incorrect]: [count->incorrect]`);