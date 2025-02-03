// 5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped
// from without breaking. If an egg is dropped from above that floor, it will break. If it is
// dropped from that floor or below, it will be completely undamaged and you can drop the
// egg again. Given two eggs, find the highest floor an egg can be dropped from without
// breaking, with as few drops as possible in the worst-case scenario.

function findMinimumNumberDrops(totalFloors) {
  if (totalFloors < 0) return "Error: The total floor cannot be negative.";

  let step = 1;
  while ((step * (step + 1)) / 2 < totalFloors) {
    step++;
  }

  return step;
}
function findMinimumNumberDropsForAnEntry(totalFloors, highestFloor) {
  if (totalFloors < 0) return "Error: The total floor cannot be negative.";
  if (highestFloor < 0) return "Error: The highest floor cannot be negative.";
  if (highestFloor > totalFloors)
    return "Error: The highest floor cannot be greater than the total number of floors.";

  let step = findMinimumNumberDrops(totalFloors);
  let firstEggFloor = step;
  let drops = 1;

  // First egg break
  while (firstEggFloor < highestFloor) {
    drops++;
    firstEggFloor += --step;
  }

  if (highestFloor == firstEggFloor) return drops;

  // Second egg break
  let secondEggFloor = firstEggFloor - step;
  while (secondEggFloor < highestFloor) {
    drops++;
    secondEggFloor++;
  }

  return drops;
}

// Test
const totalFloorsEntry = 100;
const highestFloorEntry = 88;

console.log(
  `Minimum number of drops needed to find the highest safe floor in a ${totalFloorsEntry} floor building: `,
  findMinimumNumberDrops(totalFloorsEntry)
);
console.log(
  `Number of attempts for ${highestFloorEntry}: `,
  findMinimumNumberDropsForAnEntry(totalFloorsEntry, highestFloorEntry)
);
