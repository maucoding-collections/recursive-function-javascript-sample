function factorial(n) {
  console.log(`${n}! = `)

  if (n === 0) return console.log(1)

  let result = n // init value 5
  for(let m = n - 1; m > 0; m--) {
    result *= m
  }
  return console.log(result)
}

// expectation: 5 * 4 * 3 * 2 * 1 = 120
factorial(5)
// expectation: 1
factorial(0)
// task : please make a pull requuset, expectation : -5 * -4 * -3 * -2 * -1 = 120
factorial(-5)