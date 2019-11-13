// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

myFunction=()=> {
 console.log("Function was invoked!");
 };
 myFunction();  //have to invoke outside because its function scope

 anotherFunction=(param)=> {
   return param;
 }
 anotherFunction("Example"); //puts example in param

add=(param1, param2)=>{
  return param1 + param2;
 };
 console.log(add(1,2));
subtract=(param1, param2)=> {
  return param1 - param2;
 };
 subtract(1,2);


// Stretch

 exampleArray = [1,2,3,4];
triple = exampleArray.map(function (num) {
   return num * 3;
});
 console.log(triple)