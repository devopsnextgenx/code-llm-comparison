
function findFirstRepeatingCharCount(str) {
    // Create a map to store character counts
    const charCount = new Map();
    
    // Iterate through string to count characters
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find first character that repeats
    for (let char of str) {
        if (charCount.get(char) > 1) {
            return charCount.get(char);
        }
    }
    
    // Return 0 if no repeating character found
    return 0;
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingCharCount("programmingr"))} [char->NA]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingCharCount("promgramming"))} [char->NA]: [count->correct]`);