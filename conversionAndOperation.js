// // -----------------------------
// // Type Conversion & Operations
// // -----------------------------

// console.log("=== Type Conversion in JavaScript ===");


let score = '17'

let vscore=Number(score);

// console.log((vscore));

// '17' => 17
// '17abc => NaN
// true => 1; false =>  0 


let isLoggedIn = 'Nagendra'
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; \ 0 => false 
// '' => false;
// 'Nagendra' => true

let someNumber =  17
let stringSomeNumber = String(someNumber);

// console.log(stringSomeNumber);
// console.log(typeof(stringSomeNumber));


// ************************* Operations *************************

let value = 3;
let negValue = -value;

// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = 'Hello'
let str2 = ' Nagendra'
 let str3 = str1 + str2
// console.log(str3)

// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2);
// console.log("1"+2+3);
// console.log(1+2+'3')

// console.log((3 + 4) * 5 % 3)

// console.log(true)
// console.log(+true)
// console.log(+'')


let num1, null2, num3;

num1 = num2 = num3 = 2 + 3;
console.log(num1); 

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);
// // ---------- Implicit Conversion ----------
// console.log("\n-- Implicit Conversion --");
// console.log("'5' + 2 =", '5' + 2);   // "52" → number converted to string
// console.log("'5' - 2 =", '5' - 2);   // 3   → string converted to number
// console.log("'5' * '2' =", '5' * '2'); // 10 → both strings converted to numbers
// console.log("'5' == 5 ->", '5' == 5);   // true (loose equality)
// console.log("'5' === 5 ->", '5' === 5); // false (strict equality)

// // ---------- Explicit Conversion ----------
// console.log("\n-- Explicit Conversion --");

// // String Conversion
// let num = 123;
// console.log("String(123) =", String(num));     
// console.log("(123).toString() =", (123).toString());

// // Number Conversion
// console.log("Number('123') =", Number('123')); 
// console.log("parseInt('123.45') =", parseInt('123.45'));
// console.log("parseFloat('123.45') =", parseFloat('123.45'));
// console.log("Number('abc') =", Number('abc')); // NaN

// // Boolean Conversion
// console.log("Boolean(1) =", Boolean(1));       // true
// console.log("Boolean(0) =", Boolean(0));       // false
// console.log("Boolean('') =", Boolean(''));     // false
// console.log("Boolean('hello') =", Boolean('hello')); // true


// console.log("\n=== Operations in JavaScript ===");

// // ---------- Arithmetic Operators ----------
// let a = 10, b = 3;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

// // ---------- Assignment Operators ----------
// let x = 10;
// x += 5; // x = x + 5
// console.log("x after x += 5:", x);
// x -= 3; // x = x - 3
// console.log("x after x -= 3:", x);
// x *= 2; // x = x * 2
// console.log("x after x *= 2:", x);
// x /= 4; // x = x / 4
// console.log("x after x /= 4:", x);

// // ---------- Comparison Operators ----------
// console.log("\n-- Comparison Operators --");
// console.log("5 == '5' ->", 5 == '5');
// console.log("5 === '5' ->", 5 === '5');
// console.log("5 != '5' ->", 5 != '5');
// console.log("5 !== '5' ->", 5 !== '5');
// console.log("5 > 3 ->", 5 > 3);
// console.log("5 <= 3 ->", 5 <= 3);

// // ---------- Logical Operators ----------
// console.log("\n-- Logical Operators --");
// console.log("true && false ->", true && false);
// console.log("true || false ->", true || false);
// console.log("!true ->", !true);

// // ---------- String Operations ----------
// console.log("\n-- String Operations --");
// let first = "Hello";
// let last = "World";
// console.log("Concatenation:", first + " " + last);
// console.log(`Template Literal: ${first} ${last}`);

// // ---------- Type Checking ----------
// console.log("\n-- Type Checking --");
// console.log("typeof 'hello' ->", typeof "hello");
// console.log("typeof 42 ->", typeof 42);
// console.log("typeof true ->", typeof true);
// console.log("typeof {} ->", typeof {});
// console.log("typeof [] ->", typeof []);
// console.log("typeof null ->", typeof null);
// console.log("typeof undefined ->", typeof undefined);

// console.log("\n Conversion & Operation Demo Complete!");




