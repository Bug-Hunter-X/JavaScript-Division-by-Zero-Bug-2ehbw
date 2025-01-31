function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; 
  }
  return a / b; 
}
console.log(foo(10, 0)); // Throws an error because of division by zero
console.log(foo(0, 10)); // Correctly returns 0
console.log(foo(10, 2)); // Correctly returns 5