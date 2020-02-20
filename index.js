function findMinAndRemoveSorted (arr) {
  let min = arr[0]
  let index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
      index = i
    }
  }
  arr.splice(index, 1)
  return min
}

function merge (arr1, arr2) {
  let sorted = []
  while (arr1.length != 0 && arr2.length != 0) {
    
  }
}

function mergeSort (arr) {
  
}
