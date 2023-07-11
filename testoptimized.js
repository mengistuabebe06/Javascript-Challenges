calculate = function(expression) {
  // Define a map of operators and their corresponding functions
  const operators = {
    "/": (num1, num2) => {
      if (num2 === 0) throw new Error("number can not be divided by 0");
      return num1 / num2;
    },
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2
  };

  // Split the expression by spaces and convert numbers to floats
  let tokens = expression.split(" ").map(token => {
    return operators[token] ? token : parseFloat(token);
  });

  // Use a stack to store the operands and evaluate the expression from left to right
  let stack = [];
  for (let token of tokens) {
    if (operators[token]) {
      // If the token is an operator, pop two operands from the stack and apply the operator
      let num2 = stack.pop();
      let num1 = stack.pop();
      let result = operators[token](num1, num2);
      // Push the result back to the stack
      stack.push(result);
    } else {
      // If the token is a number, push it to the stack
      stack.push(token);
    }
  }
  // Return the final result from the stack
  return stack.pop();
};
str ="/ - 3 4 + 5 2"
console.log(
  {res:calculate(str)}
);