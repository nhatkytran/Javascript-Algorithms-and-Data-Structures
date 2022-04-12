'use strict';

const numbers = [5, 3, 4, 1, 2];

const bubbleSort = function (array, count = array.length) {
  // The largest number "bubble up" to the top
  // My solution //////////
  // for (let count = 0; count < array.length; count++) {
  //   for (let i = 0; i < array.length - count; i++) {
  //     const j = i + 1;
  //     if (array[i] > array[j]) {
  //       [array[i], array[j]] = [array[j], array[i]];
  //     }
  //   }
  // }
  // Solution using while loop //////////
  // let count = array.length;
  // while (count > 0) {
  //   for (let i = 0; i < count; i++) {
  //     if (array[i] > array[i + 1]) {
  //       [array[i], array[i + 1]] = [array[i + 1], array[i]];
  //     }
  //   }
  //   count--;
  // }
  // Solution using recusion //////////
  // if (count === 0) return array;
  // for (let i = 0; i < count; i++) {
  //   if (array[i] > array[i + 1]) {
  //     [array[i], array[i + 1]] = [array[i + 1], array[i]];
  //   }
  // }
  // count--;
  // return bubbleSort(array, count);
  // The smallest number "bubble down" to the bottom
  // ...
};

console.log(bubbleSort(numbers));
