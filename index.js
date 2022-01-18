// 1. Javascript Variables
var num1 = 10;
var num2 = 20;
console.log(num1 + num2)

// 2. Datatypes in Javascsript 
/*
At a very high level there are 2 types of datatypes in JS
1. Primitive Data Types: string , number , boolean , undefinded , symbol
2. Reference Data Types: 
*/

// String
var str1 = "this is string"
var str2 = "this is also a string"

// Numbers
var num1 = 455
var num2 = 4.55
console.log(str1 + " : " + str2 + " " + num1 + num2)

// Objects
var marks = {
    shubham: 34,
    shubhanshu: 33,
    sakshi: 40
}
console.log(marks)

// Booleans
var a = true
var b = false
var c
console.log(a + ":" + b + ":" + c)

//  Null
var n = null
console.log(n)


// 3. Arrays in JS
var arr = [1, 2, 'shubham', 4, 5]
arr[2] = 'sakshi shubham' // changing array elements
console.log(arr.length) // length of array
arr.push('shubhanshu') // adding some element into array

// 4. Operators in JS
/*
1. Assignment Operators (c+=2 , c=2 , c-=2 , c*=2 , c/=2)
2. Comparison Operators (== , >= , <= , > , <)
3. Logical Operators (&& , || , ! )
4.  
5.
*/

var a = 100
var b = 50
console.log('the value of a+b = ', a + b)
console.log('the value of a-b = ', a - b)
console.log('the value of a*b = ', a * b)
console.log('the value of a/b = ', a / b)
console.log('the value of a%b = ', a % b)

console.log(true && false)
console.log(false && false)
console.log(true && true)
console.log(true || false)
console.log(false || false)
console.log(true || true)
console.log(!false)
console.log(!true)


console.log('---------------------------------------------------------')
// 5. Functions

function avg(a, b) {
    return "Average is : " + (a + b) / 2
}
console.log(avg(4, 6))
console.log(avg(10, 50))

console.log('---------------------------------------------------------')
// 6. Condition in JS

var age = 40
if (age >= 18) {
    console.log('eligible')
}
else {
    console.log('not eligible')
}

console.log('---------------------------------------------------------')
// if-else ladder

marks = 85
if (marks >= 85) {
    console.log("A Grade")
}
else if (marks >= 75) {
    console.log("B Grade")
}
else if (marks >= 65) {
    console.log("C Grade")
}
else if (marks >= 55) {
    console.log("D Grade")
}
else if (marks >= 45) {
    console.log("E Grade")
}
else {
    console.log("FAIL")
}

console.log('---------------------------------------------------------')
// Loops in JS
var arr = [1,2,3,4,5,6];
for(var i=0 ; i<arr.length ;i++){
    console.log(arr[i])
}

var arr = ['shubham','sakshi','shubhanshu']
arr.forEach(function(e){
console.log(e)
})

console.log('---------------------------------------------------------')
// while loop
// let scope is inside a block only and var is act like a global

let j = 0;
const cnst = 1; // to make any thing constant which can't be change further
// cnst=cnst+1; // throws error


var ar = ['shubham','sakshi','shubhanshu','kshitij']
while(j<ar.length){
    console.log(ar[j])
    j++;
}

console.log('---------------------------------------------------------')
// arrays method in JS
let fruits = ['apple','mango','banana','orange','cherry',null,true,false]
console.log(fruits.length) // getting length of fruits array
console.log(fruits.pop()) // popping last element of fruits array
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
fruits.push('watermelon') // pushing element at last
console.log(fruits)
fruits.shift() // popping first element from array
console.log(fruits)
fruits.unshift('RVCE') // adding element at first if we write this statement inside console.log then it will return new array length
console.log(fruits)
fruits.sort()
console.log(fruits)


console.log('---------------------------------------------------------')

// strings method in JS
let str = "shubham is a good developer and a good boy also"
console.log(str.length) // get string length
console.log(str.indexOf('good')) // find index of specified word
console.log(str.lastIndexOf('good')) // getting last index of specified word
console.log(str.slice(7,17)) // slice string start from starting to ending-1 index
console.log(str.replace('shubham','shubham nigam')) // replace old string with new string  


console.log('---------------------------------------------------------')


// Date in JS

let myDate = new Date()
console.log(myDate)
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getFullYear())
console.log(myDate.getMilliseconds())
console.log(myDate.getTime())



// DOM Manipuation
let elem = document.getElementById('click');
elem.innerHTML = 'submit'
console.log(elem.innerHTML) 

let elemClass = document.getElementsByClassName('container')
console.log(elemClass)

elemClass[0].style.background = "yellow";
elemClass[1].style.background = "orange";
elemClass[2].classList.add('text-success')
// console.log(elemClass[0].innerHTML='My name is shubham nigam')
// console.log(elem.innerText)

let tagname = document.getElementsByTagName('div')
console.log(tagname)

element = document.createElement('p')
element.innerText = "this is created para"
tagname[0].appendChild(element);

element1 = document.createElement('h1')
element1.innerText = "this is created h1"
tagname[1].appendChild(element1)


// selecting using Query
sel = document.querySelector('.container')
console.log(sel) // gives the first elements inside container

sel1 = document.querySelectorAll('.container')
console.log(sel1) // gives all element inside container


// Events in JS

function clicked(){
    //alert('button clicked')
    let tg = document.getElementsByTagName('body')
    // tg[0].style.background='grey'
    // tg[0].innerText = 'hurray'
}

window.onload = function(){
    // alert('document loaded')
}

c1.addEventListener('click',function(){ // click.addEventListener jo hai usme click jo hai wo div ki id hai matlab function banane ke bajaye aise bhe kar sakte hai
    document.querySelectorAll('.container')[2].innerHTML = '<b>we have clicked</b>'
    console.log('clicked')
}) 

// c1.addEventListener('mouseover',function(){ // click.addEventListener jo hai usme click jo hai wo div ki id hai matlab function banane ke bajaye aise bhe kar sakte hai
//     console.log('clicked')
// }) 

// c1.addEventListener('mouseout',function(){ // click.addEventListener jo hai usme click jo hai wo div ki id hai matlab function banane ke bajaye aise bhe kar sakte hai
//     console.log('clicked')
// }) 

// c1.addEventListener('mouseup',function(){ // click.addEventListener jo hai usme click jo hai wo div ki id hai matlab function banane ke bajaye aise bhe kar sakte hai
//     console.log('clicked')
// }) 

// c1.addEventListener('mousedown',function(){ // click.addEventListener jo hai usme click jo hai wo div ki id hai matlab function banane ke bajaye aise bhe kar sakte hai
//     console.log('clicked')
// }) 



// Arrow Functions
// old version without arrow functions
function sum(a,b){
    return a+b;
}

// new version using arrow function
sum1 = (a,b)=>{
    return a+b;
}

console.log(sum(2,2))
console.log(sum1(3,3))

// SetTimeOut and SetInterval
logKaro = ()=>{
    document.querySelectorAll('.container')[2].innerHTML = '<b>we have clicked hurray !</b>'
    console.log('clicked')
    
}
// setTimeout is user if you want to perform some after some time for one time only
clr1 = setTimeout(logKaro,3000); // this function will be called after 2 sec

// setInterval is user if you want to perform something repeatidly after some time
clr2 = setInterval(logKaro,500)

// JS Local Storage
localStorage.setItem('name','harry')
localStorage.getItem('name')

// JSON
obj = {name:"shubham",length:1}
jso = JSON.stringify(obj);
console.log(jso)