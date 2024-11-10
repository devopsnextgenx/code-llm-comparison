
function findLastRepeatingChar(str) {
    // Create a map to store character counts
    const charCount = new Map();
    
    // Count occurrences of each character
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find the last repeating character
    let lastRepeatingChar = '';
    let lastRepeatingCount = 0;
    
    for (let i = str.length - 1; i >= 0; i--) {
        const currentChar = str[i];
        const count = charCount.get(currentChar);
        
        if (count > 1) {
            lastRepeatingChar = currentChar;
            lastRepeatingCount = count;
            break;
        }
    }
    
    return {
        character: lastRepeatingChar,
        count: lastRepeatingCount
    };
}

console.log(`Last repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findLastRepeatingChar("programmingr"))} [char->correct]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(findLastRepeatingChar("promgramming"))} [char->correct]: [count->correct]`);