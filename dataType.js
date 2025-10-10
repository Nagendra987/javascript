"use strict";  // treat all js code as newer version 

// alert( 3 + 3 ); we are using nodejs not browser 

// the code readability should be high
console.log(3+3) 
console.log('nagendra')
console.log('dataType.js')

let name = "Nagendra"
let age = 23
let number = 7668672004
let isLogIn = false


// Number => 2 to power 53
// bigint
// string
// boolean => true/false
// null => standalone value
// undefine
// symbol

// object 



// 1. Primitive Data Types

// These are the basic, immutable types — meaning their values are copied when assigned.

// Data Type =>  Example                =>	Description
// String	 =>  'Hello' or "World"     =>  Represents text.
// Number	 =>   42, 3.14, -7	        =>  Represents integers and floating numbers.
// Boolean	 =>   true or false	        =>  Represents logical values.
// Undefined =>	  let x;                =>  → x is undefined	A variable declared but not assigned.
// Null	     =>   let y = null;         =>	Represents an intentional “empty” value.
// Symbol	 =>   Symbol('id')          =>	Unique and immutable identifiers.
// BigInt	 =>   12345678901234567890n	=>  Represents large integers beyond Number limit.

// 2. Non-Primitive (Reference) Data Types

// These store references to values, not the actual values themselves.

// Data Type =>	Example                       => Description
// Object	 => { name: "Nagendra", age: 25 } => Collection of key–value pairs.
// Array	 => [1, 2, 3, 4]	              => Ordered list of values (actually a type of object).
// Function	 => function greet() {}	          => A callable block of code.
// Date	     => new Date()	                  => Represents date and time.

console.log(typeof age)

console.log(typeof null) // object 

console.log(typeof undefined) // undefined
