// 1. Create 1D array
let data = [6, 3, 20, 70, 10, 2];

// 2. Print them all
console.log("Original array:", data);

// 3. Sort them in ascending order by comparing adjacent elements and swapping (Bubble Sort)
for (let i = 0; i < data.length - 1; i++) {
  for (let j = 0; j < data.length - 1 - i; j++) {
    if (data[j] > data[j + 1]) {
      // Swap
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

// 4. Print them all again
console.log("Sorted array (ascending):", data);

// 5. Print first element only
console.log("First element after sorting:", data[0]);
