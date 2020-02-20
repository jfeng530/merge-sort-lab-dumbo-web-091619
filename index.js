function findMinAndRemoveSorted (arr) {
  // let min = arr[0]
  // let index
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i]
  //     index = i
  //   }
  // }
  // arr.splice(index, 1)
  // return min
}

function merge (arr1, arr2) {
  let sorted = []
  while (arr1.length !== 0 && arr2.length !== 0) {
    let min = findMinAndRemoveSorted(arr1, arr2)
    sorted.push(min)
  }
  return sorted.concat(arr1).concat(arr2)
}

function mergeSort (arr) {
  let mid = arr.length/2
  let firstHalf = arr.slice(0, mid)
  let secondHalf = arr.slice(mid, arr.length)
  if (arr.length < 2) {
    return arr
  } else {
    merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
