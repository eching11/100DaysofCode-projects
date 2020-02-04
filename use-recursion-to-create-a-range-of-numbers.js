function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum) {
    return [startNum];
  } else {
    const array = rangeOfNumbers(startNum + 1,endNum);
    array.unshift(startNum);
    startNum++;
    return array;
  }
 
};
console.log(rangeOfNumbers(1,2))