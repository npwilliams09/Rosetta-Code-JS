function allEqual (arr) {
  if (arr.length <= 1){
    return true;
  }
  let prev = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (prev !== arr[i]){
        return false;
    }
    prev = arr[i];
  }
  return true;
}

function azSorted (arr) {
  // Good luck!
  if (arr.length <= 1){
    return true;
  }
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (prev >= arr[i]){
        return false;
    }
    prev = arr[i];
  }
  return true;
}