// map

let myArr=[1,2,3,4,5];

let newArray=myArr.map(function(x){
    return x*x;
})
console.log(myArr);
console.log(newArray);


// filter

let filteredArr=myArr.filter(function(x){
    return x%2===0;
})
console.log(filteredArr);


// reduce
let sumArr=myArr.reduce(function(accumulator,x){
 return accumulator+x;
},0)
console.log(sumArr);