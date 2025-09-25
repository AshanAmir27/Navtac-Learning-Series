let arr = [1,2,3,4,5];
let num = 5;
const rotateArr = (arr)=>{
for (let i = 0 ;i<arr.length; i++){
    arr[i].shift();
}
return arr;
}

console.log(rotateArr(num));

