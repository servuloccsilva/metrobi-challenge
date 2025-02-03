// 7) Think that you have an unlimited number of carrots, but a limited number of carrot
// types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
// weight and a price. Write a function that takes carrotTypes and capacity and return the
// maximum value the bag can hold. [Python or Javascript]
// Example:
// carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
// capacity = 36 //kg
// getMaxValue(carrotTypes, capacity)

function getMaxValue(carrotTypes, capacity) {
  const maxValues = new Array(capacity + 1).fill(0);

  for (let cap = 1; cap <= capacity; cap++) {
    for (const { kg, price } of carrotTypes) {
      if (kg <= cap) {
        maxValues[cap] = Math.max(maxValues[cap], maxValues[cap - kg] + price);
      }
    }
  }

  return maxValues[capacity];
}

const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;

//Test
console.log(getMaxValue(carrotTypes, capacity));
