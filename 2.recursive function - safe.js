function callMe(n) {
  if(n > 0) {
    if(n === 1) {
      console.log("call me")
    } else {
      console.log("call me")
      callMe(n - 1)
    }
  }
}

callMe(2)