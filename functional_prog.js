
const isSquareEven =(x)=>((x*x)%2===0?true:false);
console.log(isSquareEven(5));
const person1={
    name:"adam",
    age:25
}
// const person2=Object.assign({},person1);

// spread operator

const person2={...person1}
person2.name="ajay";
console.log(person1);
console.log(person2);