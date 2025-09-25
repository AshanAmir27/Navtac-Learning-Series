let sum = 0;
let num = 28 ;

for (let i=0; i<=num/2;i++){
    if(num%i===0){
        sum+=i;
    }
}

if(sum===num){
    console.log("Perfect Number");
}else{
    console.log("Not a Perfect Number");
}