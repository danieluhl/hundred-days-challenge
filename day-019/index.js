var maxSequence = function(arr) {
  if(arr.length < 2) {
    return arr[0] || 0;
  }
  let max = -Infinity;
  // i is the start index
  for(let i = 0; i < arr.length; i++) {
    // j is the end index
    for (let j = i + 1; j < arr.length + 1; j++) {
      const subArr = arr.slice(i, j);
      if(!subArr) {

      }
      return subArr;
    }
  }
}


console.log(maxSequence([2]));
