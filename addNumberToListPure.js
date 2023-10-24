const numberToAdd = () => {
  return Math.floor(Math.random() * 100);
};

const addNumberToListPure = (list, number) => {
  return [...list, number];
};

/** Add your code below */

// Inside addNumberToListPure.js, try calling the function a few times with the same inputs, like this
console.log(addNumberToListPure([1, 2, 3], 4)); // Prints [1, 2, 3, 4]
console.log(addNumberToListPure([1, 2, 3], 4)); // Prints [1, 2, 3, 4]
console.log(addNumberToListPure([1, 2, 3], 4)); // Prints [1, 2, 3, 4]
console.log(addNumberToListPure([1, 2, 3], 4)); // Prints [1, 2, 3, 4]

// Now try using the randomized functionality, but taking the randomized output of the nonpure fn numberToAdd
// so that addNumberToListPure stays pure:
console.log(addNumberToListPure([1, 2, 3], numberToAdd())); // Prints [1, 2, 3, ?]
console.log(addNumberToListPure([1, 2, 3], numberToAdd())); // Prints [1, 2, 3, ?]
console.log(addNumberToListPure([1, 2, 3], numberToAdd())); // Prints [1, 2, 3, ?]
console.log(addNumberToListPure([1, 2, 3], numberToAdd())); // Prints [1, 2, 3, ?]
