// 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
//     "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
//     “{([)]}” => false

function isValidBrackets(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  const stack = [];
  const bracketPairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let bracket of input) {
    if (isOpeningBracket(bracket)) {
      stack.push(bracket);
    } else if (isClosingBracket(bracket)) {
      const lastOpened = stack.pop();

      if (bracketPairs[bracket] !== lastOpened) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function isOpeningBracket(bracket) {
  return ["{", "[", "("].includes(bracket);
}

function isClosingBracket(bracket) {
  return ["}", "]", ")"].includes(bracket);
}

//Examples

console.log(isValidBrackets("{[]}"));
console.log(isValidBrackets("{(])}"));
console.log(isValidBrackets("{([)]}"));
console.log(isValidBrackets("(){}[]"));
console.log(isValidBrackets("{[}"));
