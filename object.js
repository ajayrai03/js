// let arr=[1,2,3,4,5];
// arr.myProp="hello";
// console.log(arr);

function fn(){
    console.log("functions");
}
fn.prop="hello";
fn.call=function f1(){
    console.log("f1 call");
}
console.log(fn);
fn();
fn.call();

// 6 primitive data types -number,string,boolean,undefined,null,symbol