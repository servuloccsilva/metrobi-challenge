//2) Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart.

async function writeWithDelay(array) {
  let delay = 1000;
  let i = 1;

  for (const item of array) {
    await new Promise((resolve) => setTimeout(resolve, delay));

    console.log(`Item ${i}: `, `${item} (${delay / 1000} second(s))`);

    i += 1;
    delay *= 2;
  }
}

// Example:
const items = ["A", "B", "C", "D", "E"];
writeWithDelay(items);
