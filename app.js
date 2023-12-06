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


// (3,6)

// 3
// 4 4
// 5 5 5
// 6 6 6 6

// for(let i = 0; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         // console.log(i);
//         console.log(j);
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


// let result = numbers.reduce(function(sum, element){
//     // console.log(element);
//     return sum + element;
// }, 0);

// let sum = 0;
// for(let element of numbers){
//     sum += element;
// }

// console.log(result);


// forEach map filter, find - 1 -element 2- index 3 - array
// reduce  1 - acc 2 - element 3 - index 4 -array

// let newarray = [];
// for(let element of array){
//     if(element % 2 === 0 || element % 3 === 0){
//         newarray.push(element);
//     }
// }


// console.log(!(13 % 13));

// console.log()
// let x = 10;
// let y = 10;
// let z = x + y;
// console.log(z);


// breakpoint

// let x = 10;
// let y = 10;
// let z = x + y;
// console.log(z);

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// try{

// }catch(e){

// }

// syntaxError

// console.log(;

// runtime ReferenceError

// printMe();

// Logic errors

// try{
//     console.log("hello from try section first");
//     printMe();
//     console.log("hello from try section second")
// }catch(e){
//     console.log("hello from catch section");
// }

// try{
//     console.log("hello from try section first");
//     printMe();
//     console.log("hello from try section second")
// }catch(e){
//     // console.log(e);
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// }

// new Error("Invalid data");
// new SyntaxError("Invalid text");
// new RangeError("Wrong range");

// throw new Error("Invalid data");

// try{
//     let age = +prompt("Please enter your age");
//     if(age < 18){
//         throw new Error("Invalid age");
//     }
//     console.log("welcome")
// }catch(e){
//     console.log(e.message);
// }

// try{
//     let age = +prompt("Please enter your age 18 - 30");
//     if(age < 18 || age > 30){
//         throw new RangeError("Wrong age range, must be 18-30");
//     }
//     console.log("welcome")
// }catch(e){
//     console.log(e.message);
// }


// try{
//     let age = +prompt("Please enter your age 18 - 30");
//     if(age < 18 || age > 30){
//         throw new RangeError("Wrong age range, must be 18-30");
//     }
//     console.log("welcome")
// }catch(e){
//     console.log(e.message);
// }finally{
//     console.log("Finaly");
// }

// class NumberError extends Error {
//     constructor(message){
//         super(message);
//         this.name = "NumberError"
//     }
// }

// try{
//     let number = +prompt("enter a number 3");
//     if(number !== 3){
//         throw new NumberError("Wrong number");
//     }
// }catch(e){
//     console.log(e.stack);
// }


// обєкт

// const user = new Object();

// const user = {
//     // key: value
//     name: "John",
//     surname: "Johnenko",
//     age: 26,
//     // name: "Peter"
// }

// let name = "name";

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);

// user.name = "Peter";
// user.middleName = "Johnson";

// delete user.name;

// console.log(user);



// const user = {
//     name: "John",
//     age: 26,
//     friends: ["John", "Peter"],
//     // showFullName: function(){
//     //     console.log(user.name);
//     // }
//     showFullName: function(){
//         console.log(this.name);
//     }

// }

// user.showFullName();
// let friends = user.friends
// friends.map(function(element){
//     console.log(element);
// })


// let users = [
//     {
//         name: "John",
//         age:26,
//     },
//     {
//         name: "Peter",
//         age:26,
//     },
// ]

// 
// const user = {......}

// class

// class User {
//     constructor(name, age, surname){
//         this.name = name;
//         this._age = age;
//         this.surname = surname;
//     }
//     // getter
//     // setter
//     get age(){
//         console.log(this._age);
//     }

//     set age(value){
//         if(value < 0){
//             alert("Please enter a valid age")
//         }else{
//             this._age = value;
//         }
//     }



//     showName(){
//         console.log(this.name);
//     }

// }

// const user1 = new User("John", 26, "Johnenko");
// user1.age = 23;
// console.log(user1.name);
// user1.name = "John";
// user1.showName();
// const user2 = new User("Peter", 26, "Peterson");
// user2.showName();
// const user3 = new User("John", 26, "Johnenko");
// const user4 = new User("John", 26, "Johnenko");




// console.log(user1);

// Наслідування
// Поліморфізм
// Інкапсуляція


// const title = document.getElementById("title");
// const headers = document.querySelectorAll(".header");

// console.log(title);
// console.log(headers[0]);

// const list = document.querySelector(".list");

// console.log(list);
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.children[0]);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.firstElementChild.nextElementSibling);
// console.log(list.lastElementChild.previousElementSibling);


// const box = document.querySelector(".box");

// console.log(box.innerHTML);
// box.innerHTML = "<h1>text from js</h1>";
// box.innerHTML = `<h1>text from js</h1>
// <span>text from js</span>
// <button>text</button>
// ` 
// !!!!!!!!

// outerHTML 
// console.log(box.outerHTML);
// box.outerHTML = "<h1>text from js</h1>";

// const input = document.querySelector(".inp");

// console.log(input);
// input.type = "submit";
// input.placeholder = "new enter"
// input.className = "new-input";
// console.log(input.type)
// input.setAttribute("type", "submit");
// input.classList.add("new-input");
// input.classList.toggle("new-input");

// const myElement = document.createElement("h1");

// myElement.innerHTML = "title";

// myElement.classList.add("title");

// console.log(myElement);
// document.body.appendChild(myElement);
// document.body.prepend(myElement);
// document.body.innerHTML = `<h1 class="title">title</h1>`
// document.body.innerHTML += `<h1 class="title">title</h1>`
// const content = document.querySelector(".content");
// content.innerHTML += `<h1 class="title">title</h1>`;


// const title = document.querySelector(".title");

// title.style.color = "red";
// title.style.backgroundColor = "green";

// let numbers = [12,3,4,5,7,8,9];

// Math.min(...numbers);

// let newWindow = window.open("http://google.com", "", "height=500, width=500, top=200, left=200");


// newWindow.resizeTo(700, 1000);
// newWindow.moveTo(100, 700);

// newWindow.close();

// console.log(window.innerHeight);
// console.log(window.innerWidth);



// function sayHello(){
//     alert("Hello");
// }



// title.onclick = function(){
//     alert("Hello");
// }

// title.addEventListener("click", function(){
//     console.log("i was clicked");
// })

// function sayHello(){
//     console.log("Hello");
// }

// title.addEventListener("click", sayHello);

// title.addEventListener("click", function(event){
//     // console.log(event.type);
//     // console.log(event.target);
//     event.target.style.color = "red";
// })

// let title = document.querySelector(".title");

// const btn = document.querySelector(".btn");


// btn.addEventListener("click", function(){
//     title.style.color = "green";
// })

// const btn = document.querySelector(".btn");

// const name = document.querySelector(".name");

// const result = document.querySelector(".result");

// btn.addEventListener("click", function(){
//     // alert(`The user ${name.value} was registered`)
//     // console.log(name.value);
//     result.innerHTML = `The user ${name.value} was registered`
// })

// const registerForm = document.querySelector(".registerForm");
// const result = document.querySelector(".result");


// registerForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("form work");
//     // console.log(event.target.elements.name.value);
//     // console.log(event.target.elements.password.value);
//     result.innerHTML += `Welcome ${event.target.elements.name.value} ${event.target.elements.password.value}<br />`;
//     event.target.reset();

// })

// setTimeout(function(){
//     console.log("hello");
// }, 5000);

// const regExp = /hello/;
// const regExp = /hello/g; // g - global search, i - not case sensitive,
// m - multiline search
// const regExp = /hello/gi; 



// const str = "Hello guys Hello guys Hello guys";

// test() match()

// console.log(regExp.test(str));
// console.log(str.match(regExp));
// console.log(typeof regExp);

// const regExp = /[abcd]/;
// a або b або c або d
// const regExp = /[a-d]/;
// const regExp = /[A-D]/g;
// const regExp = /[0-5]/g;
// const regExp = /[a-d0-5]/g;
// const regExp = /[^a-d0-5]/g;
// const regExp = /\d/g; // [0-9]








// const str = "hello hello 2232424124.34353535";
// console.log(str.match(/\d{3}\.\d{3}/));
// console.log(str.match(/\d+\.\d+/));
// console.log(str.match(/\d+\.\d*/));
// console.log(str.match(/\d+\.?\d*/));




