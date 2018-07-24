function mode (arr) {
  let indexArr = new Array(Math.max(...arr)+1).fill(0,0);
  for (let i = 0; i < arr.length; i++){
    indexArr[arr[i]] += 1;
  }
  let highest = 0;
  let resArr = [];
  for (let j = 0; j < indexArr.length; j++){
    if (indexArr[j]>highest){
      resArr = [];
      highest = indexArr[j];
      resArr.push(j); 
    }else if (indexArr[j] === highest){
      resArr.push(j)
    }
  }
  return resArr;
}