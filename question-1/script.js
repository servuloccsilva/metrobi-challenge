// 1) Write a javascript function that finds the duplicate items in any given array

function findDuplicates(array) {
  const counts = array.reduce((frequency, value) => {
    frequency[value] = (frequency[value] || 0) + 1;
    return frequency;
  }, {});

  return Object.keys(counts).filter((key) => counts[key] > 1);
}

// Examples:
const entryArray1 = ["a", "b", "c", "a", "c", "d"];
const entryArray2 = ["apple", "banana", "apple", "orange", "banana", "grape"];
const entryArray3 = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];

console.log(findDuplicates(entryArray1));
console.log(findDuplicates(entryArray2));
console.log(findDuplicates(entryArray3));
