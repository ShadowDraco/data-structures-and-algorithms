const validateBrackets = (brackets) => {
  let paired = [];
  let unpaired = [];
  //current = character in foreach loop

  let leftBrackets = ["{", "[", "("];
  let rightBrackets = ["}", "]", ")"];

  brackets.forEach((char, i) => {
    let bracketIndex = array.indexOf(char);
    if (brackets[i + 1] === rightBrackets[bracketIndex]) {
      // shift the pair out and then continue
      paired.push(brackets.shift());
      paired.push(brackets.shift());
    } else {
      // removes the current index into unpaired list
      unpaired.push = array.shift();
    }

    // after checking the list and creating unpaired list

    if (unpaired.length > 1) {
      unpaired.forEach((char, i) => {
        let bracketIndex = array.indexOf(char);
        if (unpaired[i + 1] === rightBrackets[bracketIndex]) {
          // shift the pair out and then continue
          paired.push(brackets.shift());
          paired.push(brackets.shift());
        }
      });
    } else if (unpaired.length === 1) {
      return false;
    }

    return unpaired.length === 0 ? true : false;
  });
};

module.exports = validateBrackets;
