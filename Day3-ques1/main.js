function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
  }
  
  function checkNumber(argNumber) {
console.log( " The Number entered is " + argNumber + " and Number is " + oddOrEven(argNumber));
  }
 let hello= prompt("ENTER THE NUMBER");
 checkNumber(hello);