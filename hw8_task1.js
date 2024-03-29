
function findSum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
 console.log(findSum([5,12,76]))
 

  function subtractNumbers(a, b) {
    return a - b;
  }
  console.log(subtractNumbers(87,14));
  

  function multiplyNumbers(a, b) {
    return a * b;
  }
  console.log(multiplyNumbers(7,8));

 
  function divideNumbers(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  console.log(divideNumbers(12,0));
  
  const numbersArray = [10, 5, 3];
  console.log(numbersArray);
  

  const sum = findSum(numbersArray);
  console.log("Sum:", sum);
  
 
  const difference = subtractNumbers(numbersArray[0], numbersArray[1]);
  console.log("Difference:", difference);
  

  const product = multiplyNumbers(numbersArray[0], numbersArray[2]);
  console.log("Product:", product);
  
  
  const divisionResult = divideNumbers(sum, numbersArray[2]);
  console.log("Division Result:", divisionResult);
  