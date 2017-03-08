//The Anatomy of a Function Definition
function square(x){
  return x * x;
}

console.log(square(12))

function power(base, exponent)
{
  var result = 1;
  for(var count = 0; count< exponent; count++)
  {
    result *= base;
  }
  return result;
}

pot = power(3, 4);
console.log(pot)

/*Definition Order
Even though function definitions occur as statements between the rest of the
program, they are not part of the same timeline. In the following example,
the first statement can call the future function, even though its definition
comes later:
*/
console.log("The future says: ", future());

function future() {
return "We STILL have no flying cars.";
}


/*Local variables
*/
var x = "A";
console.log(x);
function setVarToB(){
  x = "B";
}

setVarToB();
console.log(x);

/*Nested scape
*/
function multiplyAbsolute(number, factor) {
  function multiply(number){
    return number * factor;
  }

  if (number < 0)
  return multiply(-number);
  else
  return multiply(number);
}
console.log(multiplyAbsolute(-3,2))

/*The Stack
  Expects the following output: RangeError: Maximum call stack size exceeded
*/

function chicken(){
  return egg();
}

function egg(){
  return chicken();
}

console.log(chicken() + "came first.");
