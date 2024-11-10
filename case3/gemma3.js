
function findLastRepeatingChar(str) {
  let lastChar = '';
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === lastChar) {
      count++;
    } else {
      lastChar = str[i];
      count = 1;
    }
  }

  return { char: lastChar, count };
}

console.log(`Last repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findLastRepeatingChar("programmingr"))} [char->incorrect]: [count->incorrect]`);
console.log(`promgramming: ${JSON.stringify(findLastRepeatingChar("promgramming"))} [char->incorrect]: [count->incorrect]`);
