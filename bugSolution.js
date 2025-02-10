function myFunction(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle the case where both a and b are 0
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return myFunction(a - 1, b - 1) + 1;
  }
}
console.log(myFunction(5, 3)); // Output: 7
console.log(myFunction(0, 5)); //Output: 5
console.log(myFunction(5,0)); //Output: 5
console.log(myFunction(0,0)); //Output: 0