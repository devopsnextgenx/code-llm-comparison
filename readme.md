### Case 1. Get first repeating character in a string

```text
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
| qwen | ✅ | NA | ❌ |
| qwen2.5 | ✅ | NA | ❌ |

### Case 2. Get first repeating character in a string, with added more context

```text
For given string, find the first repeating character in it and return its total repeatation count in given string along with character.
```
Results:
- Except for claude, everyone missed the correct output
- All model improved with the added context, and gave correct output format, but its not accurate
- Gemma and Qwen were able to get the correct character, but unable to get the correct count

| LLM | Format | Character | Count |
| --- | --- | --- | --- |
| claude | ✅ | ✅ | ✅ |
| codellama | ✅ | ❌ | ❌ |
| gemma Control | ✅ | ✅ | ❌ |
| qwen | ✅ | ✅ | ❌ |
| qwen2.5 | ✅ | ✅ | ✅ |

### Case 3. Get last repeating character in a string, with added more context

```text
For given string, find the last repeating character in it and return its total repeatation count in given string along with character.
```
Results:
- Except for claude, everyone missed the correct output
- With twisted context for question, every model failed to get the correct output

| LLM | Format | Character | Count |
| --- | --- | --- | --- |
| claude | ✅ | ✅ | ✅ |
| codellama | ✅ | ❌ | ❌ |
| gemma Control | ✅ | ❌ | ❌ |
| qwen | ✅ | ❌ | ❌ |
| qwen2.5 | ✅ | ✅ | ✅ |

### Outcome:
- claude is the best for coding logic, output format and output correctness, also providing comments on the code to explain the code
- qwen is next best model, not as good as claude for coding logic but understands input/output format better than others
- qwen code seems to be easier to modify to get the desired output
- qwen2.5 seems to compete with claude for coding logic and output correctness, but still in some cases, claude is better

## Simulator for Physics to get how they come up with new g:

### Prompt:
```
Throw a ball with such a speed and angle to get range of 70m and height 40m, adjust speed and angle according to returned response range distance and height of called function, call mcp tool max 5 times or less and give best possible option as response, if achived response within +/-0.5m for both range distance and height consider it as best, also predict possible g value you can understand from retrieved throw data (Assumtion for throwing ball on earth might not be valid, as you dont know what planet you are on)
Final response should be as below, in json:
- Speed
- Angle
- calculated possible value of g from previous throw data
- Model (LLM model version and name. Yourself)
```

### Conclusion:
- Only Gemini Flash model was able to get the value reverse calculated
