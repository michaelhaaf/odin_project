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
