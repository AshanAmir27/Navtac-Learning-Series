let arr = [1, 2, 3, 4, 5];
let number = 6;

//problem 1
const updateArray = (arr, number) => {
  arr.push(number);
  return arr.join(" - ");
};

console.log("After update: ", updateArray(arr, number));

//problem 2
const removeLastElement = (arr) => {
  arr.pop();
  return arr.join(" - ");
};

console.log("After removing: ", removeLastElement(arr));

//problem 3
const returnFirstElement = (arr) => {
  return arr[0];
};
console.log("Returning first digit: ", returnFirstElement(arr));

// problem 4

const returnIndexOfElement = (arr, number) => {
  return arr.indexOf(number);
};
let num = 3;
console.log("Index of ", num, " is ", returnIndexOfElement(arr, num));

// problem 5
const lengthOfArray = (arr) => {
  let count = 0;
  while (arr[count] !== undefined) {
    count++;
  }
  return count;
};
console.log("Length of array", lengthOfArray(arr));

// problem 6
const reverseArray = (arr) => {
  let reversed = [];

  for (let i = 0; (i = arr.length); i++) {
    reversed.push(arr.pop());
  }
  return reversed;
};
console.log("Before reversing array: ", arr);
console.log("Reversing array: ", reverseArray(arr));


//problem 7
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray = [];
const returnEvenNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      // newArray[i] = numbers[i];
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};
console.log(returnEvenNumbers(numbers));


// problem 8
let arr1 = [1, 2, 3, 4];

const sumOfArray = (arr1) => {
  let sumArr = 0;
  let i = 0;
  while (i < arr1.length) {
    sumArr += arr1[i];
    i++;
  }
  return sumArr;
};

console.log("sum of array:", sumOfArray(arr1));



//problem 9
let stringArr = ['I', 'am', 'Ashan', 'Amer'];
const joinString = (stringArr)=>{
    let joinedArr=" ";
    for(let i = 0; i<stringArr.length;i++){
        joinedArr += stringArr[i]+" ";
    }
    return joinedArr.trim();
}

console.log(joinString(stringArr));


//problem 10
let arr2 = [1,2,1,2,3,4,5];
const removeDuplicate = (arr)=>{
    let arr3 =[];
    for(let i =0;i<arr.length;i++){
        if(!arr3.includes(arr[i])){
            arr3.push(arr[i]);
        }
    }
    return arr3;
}

console.log(removeDuplicate(arr2));