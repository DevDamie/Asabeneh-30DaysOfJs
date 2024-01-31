// Exercises: Level 2

// Question 1
let b = prompt("Enter base: ");
let h = prompt("Enter height: ");
console.log("The area of the triangle is ", 0.5 * parseFloat(b) * parseFloat(h));

// Question 2 
let a = prompt("Enter side a: ");
let b_side = prompt("Enter side b: ");
let c = prompt("Enter side c: ");
console.log("Ther perimeter of the triangle is ", parseFloat(a) + parseFloat(b_side) + parseFloat(c));

// Question 3
let length = parseFloat(prompt("Length: "));
let width  = parseFloat(prompt("Width: "));
console.log("Perimeter: ", 2 * (length + width));

// Question 4
console.log("Area of Circle: ", 2 * parseFloat(prompt("Radius: ")) * Math.PI);

// Question 5: Calculate the slope
let x_intercept = 1;
let y_intercept =-2;
let slope1 = 2;

// Question 6: points are (2, 2) and (6, 10)
let slope2 = (10 - 2)/(6-2);

// Question 7
slope2 > slope1 ? console.log("Slope2 is bigger"): console.log("slope1 is bigger");

// Question 8
let x = 1;
let y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

x = -3;
y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

// Question 9
let hrs = parseFloat(prompt("Enter hours: "));
let ratePerHr = parseFloat(prompt("Enter rate per hours: "));
console.log("your weekly earning is : ", hrs * ratePerHr);

// Question 10
"Damilola".length > 7 ? "My name is long": "My name is short";

// Question 11
let firstName = "Damilola";
let lastName = "Adegbola";
firstName.length > lastName.length ? `Your first name, ${firstName}, is longer than your family name, ${lastName}` : `Your first name, ${firstName}, is not longer than your family name, ${lastName}`;

// Question 12
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you!`);

// Question 13
let birthYear = parseInt(prompt("Enter your birth year: "));
let age = 2024 - birthYear
age >= 18 ? console.log(`You are ${age}. You are old enough to drive!`) : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} year(s).`);

// Question 14
let yrsLived = parseInt(prompt("Enter number of years you live: "));
// 1 year = 365*24*60*60 = 31536000 seconds.
console.log(`You lived ${yrsLived * 31536000} seconds!`);

// Question 15
const d = new Date();

let mins = d.getMinutes();
let hours  = d.getHours();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

console.log(`${year}-${month + 1}-${date} ${hrs}:${mins}`);
console.log(`${date}-${month + 1}-${year} ${hrs}:${mins}`);
console.log(`${date}/${month + 1}/${year} ${hrs}:${mins}`);
