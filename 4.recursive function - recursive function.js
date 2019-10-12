function factorial(n) {
  if(n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// expectation 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log("5!", factorial(-5))
// task : please make a pull requuset, expectation : -5 * -4 * -3 * -2 * -1 = 120
factorial(-5)