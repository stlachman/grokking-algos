function selectionSort(arr) {
  let temp,
    smallestIndex,
    arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    smallestIndex = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
  return arr;
}

selectionSort([5, 3, 6, 2, 10]);
