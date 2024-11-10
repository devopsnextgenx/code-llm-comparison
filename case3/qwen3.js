
const getLastRepeatingChar = (str) => {
  let charCountMap = {};
  let maxCount = 0;
  let lastChar = '';

  for(let i=0; i < str.length; i++) {
    if(!charCountMap[str[i]]) {
      charCountMap[str[i]] = 1;
    } else {
      charCountMap[str[i]]++;
      if(maxCount < charCountMap[str[i]]) {
        maxCount = charCountMap[str[i]];
        lastChar = str[i];
      }
    }
  }

  return `Last repeating character: ${lastChar}, Repeatation count: ${maxCount}`;
};


console.log(`Last repeated char and count`);
console.log(`programmingr: ${JSON.stringify(getLastRepeatingChar("programmingr"))} [char->correct]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(getLastRepeatingChar("promgramming"))} [char->incorrect]: [count->incorrect]`);