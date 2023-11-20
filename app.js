// console.log("hello world!");

// console.log("hello guys");

// console.log("hello team");

// (let const) var

// let message; // created variable

// message = "helo helo";

// message = "hello man";


// console.log(message);

// node js

// const message = "hello world!";

// message = "hello man!";


// let message = "hello man!";

// let newMessage = "hello world!";

// message = newMessage;

// console.log(message);
// console.log(newMessage);

// let number = 5;

// number = "hello";

// console.log(number);

// 232323
// -2323232
// 2.323

// const number = 2323;

// string = text

// const message = "hello 'guys' 3435#$#$35 // 2242424"

// boolean

// true false

// let data = true;

// 

// let message;

// console.log(message);

// object

// const user = {
//     name: "Ivan",
//     age: 5,
//     isAlive: true,
//     info: undefined
// }


// let x = 5;

// console.log(typeof x);

// let y = "ssfsf";

// y = true;

// console.log(typeof(y));


// взаємодія з користувачем

// alert() 
// prompt()
// confirm()

// alert(55);


// let name = prompt("what is your name", "Volodymyr");

// alert("Hello your name is " + name);

// alert(`Hello your name is ${name}`);
 
// let isOk = confirm("Are you ok?");

// console.log(isOk);

// * / + -

// let x = 10;
// let y = 100;

// console.log(x * y);

// **

// Math

// Math.pow(2,3);

// Math.sqrt(16);


// true false

// console.log(100 == 100);
// console.log(100 == 101);

// false - 0 ""
// true - 1 "sf"

// console.log("10" + "5"); // "105"

// let age = prompt("how old are you?");

// let result = (age > 18) ? "you adult" : "you not adult";

// console.log(result);

// const people = [];

// const people = ["Ivan", "Petro", "Mykhailo", "Diana", 55, true, null];
// const people = ["Ivan" - 0, "Petro" - 1, "Mykhailo" - 2, "Diana" - 3];
// const people = ["Ivan", "Petro", "Mykhailo", "Diana"];



// console.log(people[0]);
// people[2] = "John";
// console.log(people[2]);
// people[4] = "Peter";

// people[8] = "Volodymyr";

// console.log(people[7]);

// довжина масиву = кількість елементів масиву
// console.log(people.length);

// people.push("Peter", "John");

// people.pop();

// console.log(people);

// let age = +prompt("How old are you?");

// if (age > 18){
//     console.log("you adult");
// }

// if (age > 18){
//     console.log("you adult");
// } else {
//     console.log("you not adult");
// }

// if (age > 18 && age < 30){
//     console.log("you are young age");
// } else if(age > 30 && age < 40){
//     console.log("you are middle age");
// } else if(age > 40 && age < 50){
//     console.log("you are really adult");
// } else {
//     console.log("wrong age");
// }

// switch case


// switch(true){
//     case age > 18 && age < 30: // true === age > 18 && age < 30
//         console.log("you are young age");
//         break;
//     case age > 30 && age < 40:
//         console.log("you are middle age");
//         break;
//     case age > 40 && age < 50:
//         console.log("you are really adult");
//         break;
// }

// switch(age){
//     case 18:  age === 18
//         console.log("you are 18");
//         break;
//     case 20:
//         console.log("you are 20");
//         break;
//     default:
//         console.log("you are not 18 and not 20");

// }

// if(age === 18){
//     console.log("you are 18");
// }else if(age === 20){
//     console.log("you are 20");
// }else{
//     console.log("you are not 18 and not 20");
// }



// цикли

// while
// for
// for of
// for in


// while

// while(умова){
//   код
// }


// console.log(0)
// console.log(1)

// let i = 0; //0 1 2 3 4 5 6 7 8 9 10 11

// while(i <= 10){
//     console.log(i);// 0 1 2 3 4 5 6 7 8 9 10
//     i++;
// }


// for

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 0; i <= 10; i+=2){
//     console.log(i);
// }


// for(let i = 10; i >= 0; i-= 1){
//     console.log(i);
// }

// const people = ["Ivan", "Petro", "Mykhailo", "Diana"];


// for(let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

// for of - керування елементами масиву
// for in - керування індексами масиву

// for (let element of people){
//     console.log(element);
// }

// for(let index in people){
//     // console.log(index);
//     console.log(people[index]);
// }


// break
// continue

// const people = ["Ivan", "Petro", "Mykhailo", "Diana"];


// for(let index in people){
//     console.log(people[index]);
//     if(people[index] === "Mykhailo"){
//         break;
//     }
// }

// for(let index in people){
//     if(people[index] === "Mykhailo"){
//         continue;
//     }
//     console.log(people[index]);
// }


// const numbers = [1,2,3,4,5,6,7];

// let sum = 0;

// for(let index in numbers){
//     sum += numbers[index];
// }

// console.log(sum);

// функції

// function sayHello(){
//     console.log("hello");
// }

// sayHello();

// function sum(a,b){
//     console.log(a + b);
// }

// sum(10, 10);

// return

// function sum(a,b){
//     return a + b;
// }

// // console.log(sum(10, 10));
// let result = sum(10, 10);

// console.log(result);

// function sum(a, b){
//     if(b === undefined){
//         b = 0;
//         return a + b;
//     }
// }
// console.log(sum(10));


// function sum(){
//     // console.log(arguments);
//     let result = 0;
//     for(let i = 0; i < arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }

// sum(23,45,65,75,34,54,667,34,556,353,757,23);
// console.log(sum(2,3,4,5,6,7,8,9));

// let sum = function(a, b){
//     return a + b;
// }

// sum(1,2);

// sayHello();
// hello();

// function declaration
// function sayHello(){
//     console.log("hello func dec");
// }
// function expression
// let hello = function(){
//     console.log("hello func expr");
// }

// forEach map reduce find filter

// const people = ["Ivan", "Petro", "Mykhailo", "Diana"];

// people.forEach(function(element, index){
//     // console.log(element);
//     // console.log(index);
// })

// people.map(function(element, index){
//     console.log(element);
// })

// let newPeople = people.map(function(element){
//     return "T" + element;
// })

// console.log(newPeople);