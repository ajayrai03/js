console.log("varname",varname);
var varname;
console.log("varname",varname);
varname="captain america";
console.log("varname",varname);
fn();
function fn(){
    console.log("hello from fn");
}
fn();
// fnContainer(); -will result in error because fncontainer is intialiazed with undefined and we are invoking a variable which is not possible
var fnContainer=function(){
    console.log("i am an expression");
}
fnContainer();