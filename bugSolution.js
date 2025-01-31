function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs gracefully 
  }
  return a / b; 
}
console.log(foo(10, 0)); // Returns 0
console.log(foo(0, 10)); // Returns 0
console.log(foo(10, 2)); // Returns 5
console.log(foo(0,0)); //Returns 0