let js="awesome";
      if(js=="awesome") alert("JS is Fun!!");

      27-10+23*34;
      console.log(27-10+23*34);
      
               /*ASSIGNMENT-1
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
2. Log their values to the console
*/

      let country = "India";
      let continent = "Asia";
      let population = "2.5M";

      console.log("country");
      console.log("continent");
      console.log("population");

      /*Javascript executes the code from top to the bottom so always console.log when you need the output at the end
      */


/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'to the console*/

    
let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


/*CHALLENGE 1: Tell which one is right and acceptable in javascript
// Naming Practice*/
//var _myName = "shivani";
// var 1myName = "thapa";
// var _1my__Name = "bahadur";
// var $myName = "thapa technical";
// var myNaem% = "thapa technical";

var _myName = "shivani";  //This is correct
console.log(_myName); 

// var 1myName = "shivani";    //This is incorrect as first letter cannot be a number
// console.log(1myName);

var _1my_Name = "lal";   //This is correct
console.log(_1my_Name);


var $myName = "thapa technical";  //This is correct
console.log($myName);

// var myNaem% = "thapa technical";  //This is incorrect as we can not write a special character in this
//console.log(myNaem%);//




/**** Section 4👉 Data Types in JavaScript ****/


var myName = "vinod thapa";
console.log(myName);

var myAge = 26;
console.log(myAge);

var iAmThapas = false;
console.log(iAmThapas);

typeof operator 
console.log(typeof(iAmThapas));


// DataTypes Practice

console.log( 10 + "20");  //Ans : 1020 ( when number and a string is compared, it becomes a string)

// 9 - "5"
// console.log( 9 - "5"); //bug (when you minus a number with a string, it will be minused like 9-5= 4, so this is the bug)

"Java" + "Script"
console.log( "Java "+ "Script"); // Ans: JavaScript

" " + " "
console.log( " " + " "); //Ans: empty output, will show nothing


" " + 0
console.log(" "+0); //Ans: 0

"vinod" - "thapa"
console.log("vinod" - "thapa"); //Ans:NaN , because when you minus a string with a string, it shows "not a number"


true + true
console.log(true+true); //Ans: 2 , because true denotes 1 in boolean so true+true =1+1=2


true + false
console.log(true+false); //Ans: 1 , because false denotes 0 in boolean so true+false = 1+0=1


false + true
console.log(false+true); //Ans: 1


false - true
console.log(false-true); //Ans: -1


// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 


var iAmUseless = null;
console.log(iAmUseless); //Ans:null
console.log(typeof(iAmUseless));
// //2nd javascript bug when you see typeof null it shows object. This is a bug

var iAmStandBy;
console.log(iAmStandBy); //Ans:undefined
console.log(typeof(iAmStandBy)); //Ans:undefined


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


var myPhoneNumber = 9876543210;
var myName = "thapa technical";

console.log(isNaN(myPhoneNumber)); //is not-a-number verifies if the entered number is a number or not, it shows true or false, Ans: true
console.log(isNaN(myName)); //Ans:false

//Other way of verifying if it a number or not//

if(isNaN(myName)){
console.log("plz enter valid phone no");
 }   //if myName is not a number, then output will be shown as "plz enter valid phone no"//




 /**** Section 5👉 Arithmetic operators in JavaScript ****/

// console.log(5+20);


// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; //here x is the operand, = is the operator, and 5 is also the operand
// var y = 5;  

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);


// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);

console.log("Remainder Operator " + 27%4);


// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

var num = 15;
var newNum = num-- + 5;
console.log(num);    //Output will be 14 because in postfix, it will first increment/decrement
console.log(newNum);  //Output will be 20 because in postfix , the incremented/decremented value shows at the end so it is like num=15+5=20//


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = --num + 5; 
console.log(num); //Output will be 14
console.log(newNum); //Output will be 14+5=19


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.


// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

var a = 30;
var b = 10;

// Equal (==)
console.log(a == b); //Output will be false

// Not equal (!=)
console.log(a != b); //output will be true

// // Greater than (>)
console.log(a > b); //output will be true

// // Greater than or equal (>=)
console.log(a >= b);//output will be true

// // Less than (<)
console.log(a < b); false

// // Less than or equal (<=)
console.log(a <= b); false



// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

var a = 30;
var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

console.log(!((a>0) || (b<0)));
console.log(!true);


// // **********************************************************************

// // **********************************************************************



// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");





// 😳 4 Challenge Time 
// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?



// sol 1: ✔
console.log(3**3); // 27 because double star means "is to the power", so 3 is to the power 3 is 27
console.log(10 ** -1); 1/10


// sol 2:  ✔
console.log(5 + "thapa"); //output 5thapa

// sol 3: ✔ //swaping means now a=10 and b=5 should be the output

var a = 5;
var b = 10;

// output b=5; a=10

var c=b; // c=10
b=a;//b=5
a=c;//a=10


console.log("the value of a is " + a);
console.log("the value of b is " + b);


// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5; 
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);




// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?


// sol 
var num1 = 5;
var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

console.log(num1 == num2 );//Output will be true because in double equal to, it takes number and string as the same digit

var num1 = 5;
var num2 = '7';
console.log(num1==num2);//output will be false

var num1 = 5;
var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

console.log(num1 === num2 ); //output will be false because in triple equal to it takes number as a number and a string as a string and string !=number.



// ************************************************************


// 🤩Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.

// For leap year definition, refer to https://www.mathsisfun.com/leap-years.html


// How to know if it is a Leap Year:
// yes	Leap Years are any year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)
//  	not	except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
//  	 	yes	except if it can be exactly divided by 400, then it is (such as 2000, 2400)


var year = 2021;
if(year % 4===0){
      if(year % 100===0){
            if(year % 400===0){
                  console.log("The year " + year + " is a leap year");
            }
            else{
                  console.log("The year " + year + " is not a leap year");
                  }
            }
            else{
            console.log("The year " + year + " is a year leap");
            }
      }
      else{
            console.log("The year " + year + " is not a leap year");
      }



// **********************************************************************************//

// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway. If we write anything amongst these, then we get the output written in else statement because all the above are false which falls in else category. If statement will be executed only if we have anything written except the above 5 values (true statements).

if(score = 0){
  console.log("OMG, we loss the game 😭");
}else{
  console.log("Yay, We won the game 😀");
}
//output will be Yay, We won the game 😀


var tomRain = "true";
if(tomRain=="true"){
      console.log("Bring the umbrella");
}
      else{
      console.log("Don't bring the umbrella");
      }

// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands. It can be called as a short form of if else loop.

// For example:
var age = 17;
if(age >= 18){
  console.log("you are eligible to vote");
}else{
  console.log("you are not eligible to vote");
}

// Using ternary operator:

// Syntax: variablename = (condition) ? value1:value2
// can also be written as: 
// variablename=(condition) ? expTrue : expFalse

var age = 18;

(age >= 18) ? "you are eligible to vote" : "you are not eligible to vote";
//      ^
//      |
//      |
//      |      
//      (condition) ? "expTrue" : "expFalse";

console.log((age >= 18) ? "you are eligible to vote" : "you are not eligible to vote");


// ********************************************

// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

var area = "square" ;
var PI = 3.142, l=5, b=4, r=3;

// without switch
if(area == "circle"){
  console.log("the area of the circle is : " + PI*r**2);
}else if(area == "triangle"){
  console.log("the area of the triangle is : " + (l*b)/2);
}else if(area == "rectangle"){
  console.log("the area of the rectangle is : " + (l*b));
}else{
  console.log("please enter valid data");
}

//using switch to simplify if else if, we use switch condition

var area = "dsfsad" ;
var PI = 3.142, l=5, b=4, r=3;

switch(area){
  case 'circle': 
    console.log("the area of the circle is : " + PI*r**2);
    break;

  case 'triangle':
    console.log("the area of the triangle is : " + (l*b)/2);
    break;

  case 'rectangle':
    console.log("the area of the rectangle is : " + (l*b));
    break;

  default:
    console.log("please enter valid data");
}   

// Template literals:
// let ab = 5;
// let bc = 10;
// console.log('Fifteen is ' + (ab+bc) + ' and \n not ' + (ab-bc) +'.');

// Rewritting in ternany:
let ab = 5;
let bc = 10;
console.log(`Fifteen is ${ab+bc} and
not ${ab-bc}.`);


//FUNCTIONS

function calcAge(birthYear, firstName){
const age = 2037-birthYear;
console.log(`${firstName} is ${age} years old`);
return age;
}
const age1 = calcAge(1991, 'Shivani');
console.log(age1);

  // "OR" you can directly return the function

  function calcAge(birthYear, firstName){
  return 2037-birthYear;
  }
  const age2 = calcAge(1991, 'Shivani');
  console.log(age2);

  
  
  
  function myFunction(a,b){
  return a*b;
  }
  let multiply = myFunction(4,4);
  document.getElementById("demo").innerHTML= multiply;
  console.log(multiply);

// "                 OR"
  let result = document.getElementById("demo").innerHTML
  function myFunction2(p1,p2){
    return p1*p2;
  }
  result.innerHTML = myFunction2(4,4);
  console.log(result);




  let errormsg = document.getElementById("demo2")
  function msgError(){
    errormsg.innerText = "Oops! Something went wrong";
    console.log(errormsg);
  }
   msgError();