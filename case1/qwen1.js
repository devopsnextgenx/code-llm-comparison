
const findFirstRepeatingCharacter = (str) => {
  let charCountMap = {};
  for (let i = 0; i < str.length; i++) {
    if (charCountMap[str[i]]) {
      return { character: str[i], count: charCountMap[str[i]] };
    } else {
      charCountMap[str[i]] = 1;
    }
  }
  return null;
};

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingCharacter("programmingr"))} [char->NA]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingCharacter("promgramming"))} [char->NA]: [count->correct]`);