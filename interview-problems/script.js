// 1
// let array = [1, 2, 3, 4, 4, 5, 5, 6, 6, 6];

// function reverse(array) {
//   let result = []

//   for(let i = array.length - 1; i >= 0; i--) {
//     result.push(array[i])
//   } 

//   return result
// }

// console.log(reverse(array))


// 2
// const array = [1, 2, 3, 4, 4, 5, 5, 6, 6, 6];

// let max = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
// };

// console.log(max);


// 3
// const array = [1, 2, 3, 4, 4, 5, 5, 6, 6, 6];

// let min = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (min > array[i]) {
//     min = array[i];
//   }
// };

// console.log(min);


// 4 Ikkinchi eng katta sonni arraydan topish
// const array = [1, 2, 3, 5, 4, 7];

// let largest = 0;
// let secondLargest = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > largest) {
//     secondLargest = largest;
//     largest = array[i];
//   } else if (array[i] > secondLargest && array[i] !== largest) {
//     secondLargest = array[i];
//   }
// }

// console.log(secondLargest);


//5
// let array = [1, 2, 2, 3, 4, 4, 1, 5];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if(array[i] === array[j]) {
//       array.splice(j, 1);
//       j--
//     }
//   }
// }

// console.log(array);


// 6
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// const array = [...arr1, ...arr2];

// console.log(array)


// 7
// const arr = [1, 2, 3, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== i + 1) {
//     console.log(i + 1);
//     break;
//   }
// }


// 8
// let str = "hello";

// const reversed = str.split("").reverse().join("");

// console.log(reversed);


// 9
// const str = "level";

// const reversed = str.split("").reverse().join("");

// if (str === reversed) {
//   console.log(true)
// } else {
//   console.log(false)
// }


// 10
// const str = "JavaScript";

// const vowels = "aeiouAEIOU";

// let count = 0;

// for (let char of str) {
//   if (vowels.includes(char)) {
//     count++;
//   }
// }

// console.log(count);