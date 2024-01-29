// Exercises: Level 1

// Question 1
let firstName = "Damilola",
lastName = "Adegbola",
country = "Nigeria",
city = "Ilorin",
age = 100, isMarried = true,
year = 2024;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(year));

// Question 2
console.log(typeof('10') == 10);

// Question 3
console.log(parseInt('9.8') == 10);

// Question 4
    // i: three truthy comparisons
    console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 == 4);

    // ii: three falsy comparisons
    console.log(4 != '4');
    console.log(2 == '4');
    console.log(4 === '4');

// Question 5
console.log(true, true, false, false, true, true, false, false, false, true, false);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(('python'.length) != ('jargon'.length) );

// Question 6
console.log(true, false, true, true, false, true, true, false, true, true, false);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.includes('on')) && ('python'.includes('on')));

// Question 7: use the Date object
const date = new Date;
console.log("Year : ", date.getFullYear());
console.log("Month: ", date.getMonth() +1);
console.log("Date : ", date.getDate());
console.log("Day  : ", date.getDay());
console.log("Hours: ", date.getHours());
console.log("Mins : ", date.getMinutes());
console.log("Secs : ", Date.now());





