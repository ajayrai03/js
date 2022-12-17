// map prototype
Array.prototype.myMap=function(cb){
let newArr=[];
for(let i=0;i<this.length;i++){
    newArr.push(cb(this[i]))
}
return newArr;
}
function square(x){
    return x*x;
}
let arr=[1,2,3,4,5];
let mappedArr=arr.myMap(square);
console.log(mappedArr);

// filter prototype

Array.prototype.myFilter=function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i]))
        newArr.push(this[i])
    }
    return newArr;
    }
    function isEven(x){
        return x%2===0;
    }
    let arr1=[1,2,3,4,5];
    let filterArr=arr1.myFilter(isEven);
    console.log(filterArr);


    // reduce
    Array.prototype.myReduce=function(cb){
        let accumulator=0
        for(let i=0;i<this.length;i++){
            accumulator=cb(accumulator,this[i])
        }
        return accumulator;
        }
        function sum(accumulator,x){
            return accumulator+x;
        }
        let arr2=[1,2,3,4,5];
        let reduceArr=arr2.myReduce(sum);
        console.log(reduceArr);
