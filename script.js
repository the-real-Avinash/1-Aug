// var name = "Avinash";
// console.log(name);

// let name = "Avinash";
// console.log(name);

// const name = "Avinash";
// console.log(name);

// var name = "Avinash";
// name = "Avi"
// console.log(name);

// let name = "Avinash";
// name = "Avi"
// console.log(name);

// const name = "Avinash";          //TypeError Assignment to constant variables;
// name = "Avi"
// console.log(name);


// function check(param){              //Var is Function scoped and let and const are blocked scoped
//     if(param){
//         let name = "Avinash";
//         const sname = "Gavandhe";
//         console.log(`My name is ${name} and Surname is ${sname}`);
//     }
// }

// function check(param){              //Var is Function scoped and let and const are blocked scoped
//     if(param){
//         let name = "Avinash";
//         const sname = "Gavandhe";
//     }
//     console.log(`My name is ${name} and Surname is ${sname}`);      //This line throws an error as let and         const are blocked scoped
// }

// check(true);


// var a = "Avinash";

// if(true){
//     var a = "Abhijeet";
//     console.log(a);
// }
// console.log(a);

// let a = "Avinash";

// if(true){
//     let a = "Abhijeet";
//     console.log(a);
// }
// console.log(a);

// -----------------------------------------Template Literals-------------------------------

// const name = "Avinash";
// const sname = "Gavandhe";
// //es5
// console.log("My Name is "+ name + " and surname is "+sname);
// //es6
// console.log(`My Name is ${name} and Surname is ${sname}`);

// const a = 10;
// const b = 20;

// console.log(`The addition is ${a+b} and Substraction is ${a-b}`);

// ------------------------------String Methods------------------------------------------

// const str = "Avinash";                      //String methods are case sensitive
// console.log(`${str}`.startsWith('A'));
// console.log(`${str}`.endsWith('h'));
// console.log(`${str} `.repeat(10));

// if(str.includes("Avinash")){
//     console.log("true");
// }

// --------------------------------Array Destructuring------------------------------------------

// const arr = ["js", "c++", "c#", "typescript"];

// var a = arr[0];
// var b = arr[1];
// var c = arr[2];

// console.log(a,b,c);

// let [a,b,c,d] = arr;
// console.log(`Favourite Programming language is ${a}`);

// let a = 10;
// let b = 20;

// [a,b] = [b,a];
// console.log(`a value is ${a} and b value is ${b}`);

// const programmingLang = ['Javascript', 'C++', 'C#', 'Carbon'];
// let [first,,,last] = programmingLang;
// console.log(`My Most Favourite Programming Language is ${first} and Least Favourite P langugage is ${last}`);


// ---------------------------------Object Destructuring --------------------------------------

// const obj = {
//     name : "Avinash",
//     sname : "Gavandhe",
//     degree : "BE",
//     age : 22,
//     hobbies: {
//         first : 'maditation',
//         sec : 'Cricket'
//     }
// }

// let {name:myName,sname,degree,age,hobbies} = obj;
// console.log(`My Name is ${myName} and surname is ${sname} and my Degree is ${degree} and age is ${age} and my hobbies is ${hobbies.sec}`);
// console.log(obj.name);


// --------------------------------Default parameter--------------------------------------

// function mult(a,b){
//     console.log(a*b);
// }

// mult(4);            //Nan output

// function mult(a,b=4){       Default Parameter
//     console.log(a*b);
// }
// mult(4);
