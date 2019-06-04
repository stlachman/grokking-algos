function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "No Match";
}
let example = [1, 3, 5, 7, 9];

binarySearch(example, 3);
// --> 1
binarySearch(example, -1);
// --> "No Match"
