console.log("hello there world");

// https://javascript.info/variables

let message = "Hello!";
// alert(message);

let user = "John";
let age = 25;
message = "Hello"; // cannot redeclare (SyntaxError)

let hello = "Hello worlds!";
message = hello;

// alert(hello);
// alert(message);

let userName; // variable names camelcase, not starting with digit, letters/digits/$/_
let test123; // case sensitive

let $ = 1; // these are allowed!
let _ = 2;

// let 1a;        // both of these are illegal
// let my-name; 
// let let = 5;   // reserved names
// let return = 5; 

// use-strict: idk seems to work either way
num = 5;

"use strict"
num = 5;


// constants
const myBirthday = "18.04.1982"; // cannot be reassigned, causes error
const MYBIRTHDAY = "18.09.2321"; // remember all-caps in the consts names (convention: if known prior to page-load)

// tasks

// 1:
let admin, name;
name = "John";
admin = name;
// alert(admin);
// 2:
let planetName = "earth";
let currentUserName;

// 3: birthday uppercase, age lowercase

// w3schools: js_numbers.asp
//
// javascript numbers are always 64bit floating point
// "integers" accurate to 15 digits; max # decimals 17
// floating point arithmetic is hilarious:
let x = 0.2 + 0.1;
console.log(x); // 0.30000000000000004
// fix by multiply operands/divide result
x = (0.2*10 + 0.1*10)/10 
console.log(x); // 0.3
//
// + operator for both addition and concatenation
x = 10;
let y = 20;
let X = "10";
let Y = "20";
console.log(x + y); // 30
console.log(X + Y); // "1020"
console.log(x + Y); // "1020"
console.log(X + y); // "1020"
// intuitive enough, but what about:
console.log("the result is: " + x + y); // "the result is 1020"
let Z = "30";
console.log(x + y + Z); // "3030", not 102030
// point being: left associative for chained operands
// 
// javascript can convert strings to numbers in operations (just not +):
console.log(X/Y); // 0.5
console.log(X*Y); // 200
console.log(X-Y); // -10
console.log(X%Y); // 10
//
// NaN:
x = 100 / "100";    // no NaN, just 1
console.log(x);
x = 100 / "Apple";  // NaN
console.log(x);
console.log(isNaN(x)); // conditional
// NaN as any one operand (with other numbers) will result in NaN:
console.log(x + y) // NaN
console.log(x + Y) // "NaN20"
console.log(typeof NaN) // number
//
// Infinity: max number
let myNumber = 2;
// while (myNumber != Infinity) {
//   myNumber *= myNumber;
// }
// console.log(myNumber); // Infinity
myNumber = 2;
console.log(myNumber/0); // Infinity
console.log(typeof Infinity); // Number
//
// Hexadecimal: anything preceded by 0x
let myHex = 0xFF;
console.log(myHex); // 255
// toString: specify base of number
myNumber = 32;
console.log(myNumber.toString(32)); // 10
console.log(myNumber.toString(16)); // 20
console.log(myNumber.toString(12)); // 28
console.log(myNumber.toString(10)); // 32
console.log(myNumber.toString(8)); // 40
console.log(myNumber.toString(2)); // 10000
//
// Numbers as Objects
// all previous examples are primitives. We can also make them into JSObjects
let xObj = new Number(123); // (the tutorial says using New is a dumb thing to do)
console.log(xObj);
//
// '==' vs '==='
let xPrim = 123;
console.log(xObj == xPrim); // true
console.log(xObj === xPrim); // false
console.log(xObj === xObj); // true (objs equal to themselves)
console.log(xPrim === xPrim); // true (prims equal to themselves)
console.log(xObj == new Number(123)); // false (two diff objs even with same value is false.)
console.log(xObj === new Number(123)); // false (two diff objs even with same value is false.)

// Mozilla
//
// there's also BigInt for v large integers.
//
// Number methods:
const lotsOfDecimal = 1.7356584958675746364.toFixed(2);
console.log(lotsOfDecimal); // 1.74 (rounds up when >=5)
// Number constructor:
let someNumber = "74";
console.log(Number(someNumber) + 3); // 77, as opposed to "743"

// javascript.info/operators
// 
// Unary, Binary, Operands
//
// operand: the things that operators are applied to.
//
// unary: an operator is unary if it has a single operand
// let x = 1;
// x = -x (unary negation)
//
// binary: an operator is binary if it has two operands
// let x=1, y=3
// y = y - x (binary negation)
//
// unary +: does nothing to numbers, but converts nonnumbers to numbers
console.log(+true); // 1
console.log(+""); // 0
console.log(+"apple"); // NaN
console.log(+"100"); // 100
console.log(-true); // -1
console.log(-""); // -0 (lol)
console.log(-"apple"); // NaN (okay cool)
// 
// Note: for operator precedence, unaries come before binaries.
//
// Assignment (=) is an operator, with the 2nd lowest precedence (only comma lower)
// All operators return values. The call x = value writes value into x, then returns value.
// Here's a demonstrative example:
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0
// For the same reason we can chain assignments:
a = b = c = 2+2; // everything is 4.
//
// Bitwise operators
//  treat arguments as 32-bit integer numbers
//  & | * ~ << >> >>>
//  and or xor not leftshift rightshift zero-fill-right-shift
//
//  Commas
a = (1+2, 3+4);
console.log(a); //7. The 1+2 result is thrown away. Use is to chain actions in one line. 
//
// Tasks:
// 1. postfix vs prefix
a = 1, b = 1;
let d = ++a;
let e = b++;
console.log(a, b, d, e) // 2 2 2 1
// nevermind the rest i did em in my head


 

// https://www.theodinproject.com/lessons/foundations-fundamentals-part-1 
//
// 1.
console.log(23+97);
//
// 2.
console.log(23+97+1+2+3+4);
//
// 3.
console.log((4+6+9)/77);
//
// 4. 
// ah fuck it these are really basic.
//
// 5. 
// 
// 6. 

