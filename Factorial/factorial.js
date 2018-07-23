function factorial (n) {
  // Good luck!
  if (n < 2) return 1;
  let res = n;
  for (let i = n-1; i >= 2; i--){
    res *= i;
  }
  return res;
}