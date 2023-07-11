const calculate = function(expression) {
    // Defining a function that used to evaluate the expression based on the operator
    const cal = (num1, op, num2)=>{
      if(op === "/"){
        if(num2 !== 0){
          return num1/num2
        }
      throw new Error("number can not be divided by 0")
      }else if(op === "+"){
        return num2 + num1
      }else if(op === "-"){
        return num1 - num2
      }else if(op === "*"){
        return num1 * num2
      }
    }
    //Defining the stack to process the expression
    let arr = []
    // spliting the expression using white space
    expression = expression.split(" ")
    // Defining a variable that used to hold all oprators and oprands 
    let operators =["+","-","/","*"]
    let val2 , op
    let res
    // checking  the expression length 
    if(expression[0] === "0" || expression.length < 3){
      return 0
    }
    // loop over each token to evaluate the expression
    for(let val of expression){
      //if the token operator push to the stack
      if(operators.includes(val)){
        arr.push(val)
      }
      else{
      /* if the token at the top of the stack is number,
       it will evaluate result based the current token
       else push the number to the stack  
       */
        if(!operators.includes(arr[arr.length-1])){
          val2 = arr.pop()
          op = arr.pop()
          // send the two token operands and operator to the cal function to return result
          res = cal(Number(val2), op, Number(val))
          // push the result
          arr.push(res)
        }else{
          arr.push(val)
        }
      }
  
    }
      // check for any tokens left on the stack 
        while(arr.length > 1){
        let val3 = arr.pop()
        let val4 = arr.pop()
        let op2 = arr.pop()
      // send the two token operands and operator to the cal function to return result
        res =  cal(Number(val4), op2 , Number(val3))
        arr.push(res)
  
      }
    // return over all result of the expression  
    return res;
    
  }
  
    
  str ="/ - 3 4 + 5 2"
  console.log(
    {res:calculate(str)}
  );
