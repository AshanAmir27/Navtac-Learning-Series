
const fruits = ['apple', 'banana', 'cherry'];
const vegetables = ['carrot', 'broccoli', 'spinach'];

console.log("list of fruits ")
for(let i =0;i<fruits.length; i++){
    console.log(fruits[i]);
}

console.log("-----------")

console.log("list of fruits using for of loop ")

for(const fruit of fruits){
    console.log(fruit);
}


console.log("-----------")

console.log("list of fruits using forEach loop ")

fruits.forEach((fruit => {
    console.log( fruit);
}));

console.log("-----------")

console.log('length of array ',fruits.length);

console.log("-----------")

console.log('fruit element ',fruits);

console.log("-----------")

let myList = fruits.toString();
console.log('myList: ', myList);

console.log("-----------")

console.log(fruits.join(' - '))


console.log("-----------")

let fruit = fruits.at(1);
console.log('fruit at index 1: ', fruit);

console.log("-----------")

fruits.push('mango');
console.log('after push: ', fruits);

console.log("-----------")
fruits.pop();
console.log('after pop: ', fruits);

console.log("-----------")
fruits.unshift('mango');
console.log('after unshift: ', fruits);

console.log("-----------")
fruits.shift();
console.log('after shift: ', fruits);


console.log("-----------")

let FruitsAndVegitables = fruits.concat(vegetables);
console.log('after concat: ', FruitsAndVegitables);