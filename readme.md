### Case 1. Get first repeating character in a string

```
For given string, find the first repeating character in it and return its count repeatation in given string.
```
Results:
- All local llms missded the correct output
- Qwen was the only one who got the format for output exactly as expected without explicitly asking for it
- Claude was the only one who got the output correct, though the format was exactly as asked only printing the count and not the character, which can be understood from the prompt not having it in after `and`

| LLM | Format | Character | Count |
| --- | --- | --- | --- |
| claude | ✅ | ✅ | ✅ |
| codellama | ✅ | NA | ❌ |
| gemma Control | ✅ | NA | ❌ |
| qwen | ✅ | ✅ | ❌ |

### Case 2. Get first repeating character in a string, with added more context

```
For given string, find the first repeating character in it and return its total repeatation count in given string along with character.
```
Results:
- Except for codellama, everyone missed the correct output, codellama was on the spot with the correct output and format
- Qwen was the only one who got the format for output correct

| LLM | Format | Character | Count |
| --- | --- | --- | --- |
| claude | ✅ | ✅ | ✅ |
| codellama | ✅ | ❌ | ❌ |
| gemma Control | ✅ | ✅ | ❌ |
| qwen | ✅ | ✅ | ❌ |

### Case 3. Get last repeating character in a string, with added more context

```
For given string, find the last repeating character in it and return its total repeatation count in given string along with character.
```
Results:
- Except for codellama, everyone missed the correct output, codellama was on the spot with the correct output and format
- Qwen was the only one who got the format for output correct

| LLM | Format | Character | Count |
| --- | --- | --- | --- |
| claude | ✅ | ✅ | ✅ |
| codellama | ✅ | ❌ | ❌ |
| gemma Control | ✅ | ❌ | ❌ |
| qwen | ✅ | ❌ | ❌ |

### Decision:
- claude is the best for coding logic, output format and output correctness, also providing comments on the code to explain the code
- qwen is next best model, not as good as claude for coding logic but understands input/output format better than others
- qwen code seems to be easier to modify to get the desired output