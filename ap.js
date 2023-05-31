// let array = [1,2,6];
// let sum=0;

// for(let i=0;i<array.length;i++){
//     sum=sum*10;
//     sum=sum+array[i]
    
// }



// console.log(sum);

// let number =126;
// let array=[]
// let length=0;
// let number1=number
// while(number>0){
//     number = Math.floor(number/10)
//     length++;
// }
// length--
// while(number1>0){
//     let value = number1%10;
//     array[length]=value;
//     length--;
//     number1 = Math.floor(number1/10)
// }
// console.log(array);

const array = [1,2,3]
// const value =array.filter((item)=>{
//    return item%2===0;
// })

// console.log(value);


const result = array.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(result);