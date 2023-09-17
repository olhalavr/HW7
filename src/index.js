function reverseArray(arr) {
    const reversedArr = [];
  
    for (const item of arr) { 
      reversedArr.unshift(item); 
    }
  
    return reversedArr;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray); 