/*var vs let
var is used in the older versions of JavaScript.
var is function scoped.
For example, var x;

let is the new way of declaring variables starting ES6 (ES2015).
let is block scoped.
For example, let y; */

//..............................................................................................................

/*
JavaScript Initialize Variables
We use the assignment operator = to assign a value to a variable.

let x;
x = 5;
Here, 5 is assigned to variable x.

You can also initialize variables during its declaration.

let x = 5;
let y = 6;

In JavaScript, it's possible to declare variables in a single statement.

let x = 5, y = 6, z = 7;

If you use a variable without initializing it, it will have an undefined value.

let x; // x is the name of the variable

console.log(x); // undefined

Here x is the variable name and since it does not contain any value, it will be undefined.
.............................................................................................................

Rules for Naming JavaScript Variables
The rules for naming variables are:

1.Variable names must start with either a letter, an underscore _, or the dollar sign $. For example,
//valid
let a = 'hello';
let _a = 'hello';
let $a = 'hello';

2.Variable names cannot start with numbers. For example,
//invalid
  Let 1a = 'hello'; // this gives an error
  JavaScript is case-sensitive. So y and Y are different variables. For example,
  let y = "hi";
  let Y = 5;

console.log(y); // hi
console.log(Y); // 5
Run Code

3.Keywords cannot be used as variable names. For example,
//invalid
let new = 5; // Error! new is a keyword.


JavaScript Constants
The const keyword was also introduced in the ES6(ES2015) version to create constants. For example,

const x = 5;
Once a constant is initialized, we cannot change its value.

const x = 5;
x = 10;  // Error! constant cannot be changed.
console.log(x)
Run Code

Simply, a constant is a type of variable whose value cannot be changed.

Also, you cannot declare a constant without initializing it. For example,

const x;  // Error! Missing initializer in const declaration.
x = 5;
console.log(x)


*/



/* JavaScript allows you to work with three primitive data types −

Numbers, eg. 123, 120.50 etc.

Strings of text e.g. "This text string" etc.

Boolean e.g. true or false.

JavaScript also defines two trivial data types, null and undefined, each of which defines only a single value. 

In addition to these primitive data types, JavaScript supports a composite data type known as object.*/
//...............................................................................................................

/*JavaScript console.log()

All modern browsers have a web console for debugging. 
The console.log() method is used to write messages to these consoles. For example,

let sum = 44;
console.log(sum);   // 44

When you run the above code, 44 is printed on the console.

Its syntax is:

console.log(message);
Here, the message refers to either a variable or a value.
----------------------------------------------------------------------------------------------
Example 1: Print a Sentence
// program to print a sentence

// passing string
console.log("I love JS");
..........................................................................................

Example 2: Print Values Stored in Variables
// program to print variables values

// storing values
const greet = 'Hello';
const name = 'Jack';

console.log(greet + ' ' + name);

As you can see from these examples, 
console.log() makes it easier to see the value inside a variable. 
That's why it's commonly used for testing/debugging code.
.............................................................................................
*/

/*
DATA TYPES
Data Types	              Description	                                    Example
String	            represents textual data	                           'hello', "hello world!" etc
.......................................................................................................
Number	        an integer or a floating-point number	                3, 3.234, 3e-2 etc.
..........................................................................................................
BigInt	           an integer with arbitrary precision              	900719925124740999n , 1n etc.
.......................................................................................................
Boolean	        Any of two values: true or false	                     true and false
........................................................................................................
undefined	    a data type whose variable is not initialized	          let a;
.......................................................................................................
null	        denotes a null value	                                   let a = null;
.......................................................................................................
Symbol	        data type whose instances are unique and immutable	        let value = Symbol('hello');
...........................................................................................................
Object	        key-value pairs of collection of data	                    let student = { };
............................................................................................................
*/
/*JavaScript String
String is used to store text. In JavaScript, strings are surrounded by quotes:

Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: `Hello`
For example,

//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;

Backticks are generally used when you need to include variables or expressions into a string. 
This is done by wrapping variables or expressions with ${variable or expression}

*/
/*JavaScript Number
Number represents integer and floating numbers (decimals and exponentials). For example,

const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5

*/
/*
JavaScript Boolean
This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch. For example,

const dataChecked = true;
const valueCounted = false;
*/
/* JavaScript null
In JavaScript, null is a special value that represents empty or unknown value. For example,

const number = null;
The code above suggests that the number variable is empty.
*/
/*JavaScript undefined

The undefined data type represents value that is not assigned. 
If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,

let name;
console.log(name); // undefined
*/
/* JavaScript Object
An object is a complex data type that allows us to store collections of data. For example,

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
}; 
*/
/*
JavaScript Type
JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.

It also means that a variable can be of one data type and later it can be changed to another data type. For example,

// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";
JavaScript typeof
To find the type of a variable, you can use the typeof operator. For example,

const name = 'ram';
typeof(name); // returns "string"

const number = 4;
typeof(number); //returns "number"

const valueChecked = true;
typeof(valueChecked); //returns "boolean"

const a = null;
typeof(a); // returns "object"
Notice that typeof returned "object" for the null type. This is a known issue in JavaScript since its first release.
*/
//.............................................................................................................................
/*
JavaScript Operators
In this tutorial, you will learn about different operators available in JavaScript and how to use them with the help of examples.

What is an Operator?
In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example,

2 + 3; // 5
Here + is an operator that performs addition, and 2 and 3 are operands.

JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic calculations. For example,

const number = 3 + 5; // 8
Here, the + operator is used to add two operands.

Operator	           Name             	            Example
+	                Addition	                        x + y
-	                Subtraction	                        x - y
*	                Multiplication      	            x * y
/	                Division	                        x / y
%	                Remainder	                        x % y
++	                Increment (increments by 1)        	++x or x++
--              	Decrement (decrements by 1)	        --x or x--
**              	Exponentiation (Power)          	x ** y


Example 1: Arithmetic operators in JavaScript
let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5


*/

//.................................................................................................................
/* 
JavaScript Comparison Operators

Comparison operators compare two values and return a boolean value, either true or false. For example,

const a = 3, b = 2;
console.log(a > b); // true 
Run Code
Here, the comparison operator > is used to compare whether a is greater than b.

Operator	        Description	                                                                         Example
==              	Equal to: returns true if the operands are equal	                                 x == y
!=	            Not equal to: returns true if the operands are not equal    	                         x != y
===	    Strict equal to: true if the operands are equal and of the same type            	             x === y
!==	    Strict not equal to: true if the operands are equal but of different type or not equal at all	 x !== y
>	    Greater than: true if left operand is greater than the right operand	                         x > y
>=  	Greater than or equal to: true if left operand is greater than or equal to the right operand	 x >= y
<	    Less than: true if the left operand is less than the right operand	                             x < y
<=	    Less than or equal to: true if the left operand is less than or equal to the right operand       x <= y

Example 2: Comparison operators in JavaScript

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

Comparison operators are used in decision-making and loops.

........................................................................................................................

JavaScript Logical Operators
Logical operators perform logical operations and return a boolean value, either true or false. For example,

const x = 5, y = 3;
(x < 6) && (y < 5); // true
Here, && is the logical operator AND. Since both x < 6 and y < 5 are true, the result is true.

Opera                       Description	                                                                    Example
&&             Logical AND: true if both the operands are true, else returns false	                        x && y
||	           Logical OR: true if either of the operands is true; returns false if both are false	        x || y
!	           Logical NOT: true if the operand is false and vice-versa.	                                 !x


Example 3: Logical Operators in JavaScript
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false
Run Code
Output

true
false
true
false

Logical operators are used in decision making and loops.

JavaScript Bitwise Operators
Bitwise operators perform operations on binary representations of numbers.

Operator	Description
&	Bitwise AND
|	Bitwise OR
^	Bitwise XOR
~	Bitwise NOT
<<	Left shift
>>	Sign-propagating right shift
>>>	Zero-fill right shift
Bitwise operators are rarely used in everyday programming. If you are interested,


JavaScript String Operators
In JavaScript, you can also use the + operator to concatenate (join) two or more strings.

Example 4: String operators in JavaScript
// concatenation operator
console.log('hello' + 'world');

let a = 'JavaScript';

a += ' tutorial';  // a = a + ' tutorial';
console.log(a);
Run Code
Output

helloworld

JavaScript tutorial
Note: When + is used with strings, it performs concatenation. 
However, when + is used with numbers, it performs addition.

*/

// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello