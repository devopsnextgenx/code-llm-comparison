
const findFirstRepeatingChar = (str) => {
  let charCountMap = {};
  for(let i=0; i < str.length; i++) {
    if(charCountMap[str[i]]) {
      return `${str[i]} is repeating ${charCountMap[str[i]]} times`;
    } else {
      charCountMap[str[i]] = 1;
    }
  }
  return 'No repeating character found';
};

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingChar("programmingr"))} [char->correct]: [count->incorrect]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingChar("promgramming"))} [char->correct]: [count->incorrect]`);