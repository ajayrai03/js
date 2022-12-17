// map 
let myArr=[1,2,3,4,5];


function myPolyFillMap(arr,cb){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}
function square(x){
    return x*x;
}
console.log(myPolyFillMap(myArr,square));

// filter

let fArr=[2,4,3,8,10];
function myPolyFillFilter(arr,cb)
{
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
function remainder(x){
    if(x%2===0){
        return x;
    }
}

console.log(myPolyFillFilter(fArr,remainder));

// reduce

function myPolyFillReduce(arr,cb){
    let accumulator=0;
    for(let i=0;i<arr.length;i++){
      accumulator = cb(accumulator,arr[i]);
    }
    return accumulator;
}

function reduce(accumulator,x){
    return accumulator+x;
}

console.log(myPolyFillReduce(myArr,reduce));