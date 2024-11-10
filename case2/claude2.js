
function findFirstRepeatingChar(str) {
    if (!str || typeof str !== 'string') {
        return null;
    }

    const charMap = new Map();
    
    // Count occurrences of each character
    for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    // Find first character that has count > 1
    for (let char of str) {
        if (charMap.get(char) > 1) {
            return {
                character: char,
                count: charMap.get(char)
            };
        }
    }
    
    return null; // If no repeating character found
}

console.log(`First repeated char and count`);
console.log(`programmingr: ${JSON.stringify(findFirstRepeatingChar("programmingr"))} [char->correct]: [count->correct]`);
console.log(`promgramming: ${JSON.stringify(findFirstRepeatingChar("promgramming"))} [char->correct]: [count->correct]`);