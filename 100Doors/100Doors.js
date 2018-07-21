function getFinalOpenedDoors (numDoors) {
  // Good luck!
  let doorArr = new Array(numDoors).fill(0,0);

  for(let i = 1; i <= numDoors;i++){
    for(let j = 1; j <= numDoors; j++){
      if (j%i === 0){
        if (doorArr[j-1] === 0){
          doorArr[j-1] = j;
        }else{
          doorArr[j-1] = 0;
        }
      }
    }
  }
  return doorArr.filter(item => item !== 0);
}