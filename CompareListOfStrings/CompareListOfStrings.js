function allEqual (arr) {
  if (arr.length === 0){
    return true;
  }
  let resArr = [];
  for (let i = 0; i < arr.length; i++){
    let tally = 0;
    for (let j = 0; j < arr[i].length; j++){
      tally += arr[i].charCodeAt(j);
    }
    resArr.push(tally);
  }
  let total = resArr.reduce((acc,curr)=>acc+curr);
  if (total%resArr[0] === 0){
    return true;
  }
  return false;
}

function azSorted (arr) {
  // Good luck!
  if (arr.length === 0){
    return true;
  }
  for (let i = 0; i < arr.length-1; i++){
    let shortestLen = 0;
    let elem1 = arr[i];
    let elem2 = arr[i+1];
    if (elem1.length <= elem2.length){
      shortestLen = elem1.length;
    }else{
      shortestLen = elem2.length;
    }
    for (let j = 0; j < shortestLen; j++){
      if(elem1.charCodeAt(j) === elem2.charCodeAt(j) && j === shortestLen-1){
        return false;
      }else if (elem1.charCodeAt(j) === elem2.charCodeAt(j)){
        continue;
      }else if (elem1.charCodeAt(j) < elem2.charCodeAt(j)){
        break;
      }else{
        return false;
      }
    }
  }
  return true;
}