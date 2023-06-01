const validateBrackets = require("./index");

describe.skip("Brackets", () => {
  it("it verifies the balance of a string of brackets", () => {
    expect(validateBrackets("{}")).toBeTruthy();
    expect(validateBrackets("(){}[[]]")).toBeTruthy();
    expect(validateBrackets("{}{Code}[Fellows](())")).toBeTruthy();
    expect(validateBrackets("()[[Extra Characters]]")).toBeTruthy();
    expect(validateBrackets("{}(){}")).toBeTruthy();
    expect(validateBrackets("{(})")).toBeFalsy();
    expect(validateBrackets("(](")).toBeFalsy();
  });
});
