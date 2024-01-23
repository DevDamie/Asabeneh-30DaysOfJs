// Exercise: Level 2

// Question 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Question 2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// Question 3
let tyPe = typeof('10');
check1 = (tyPe == 10) ? tyPe : 10;

// Question 4
let figure = '9.8';
check = (parseFloat(figure) == 10) ? check : Math.ceil(figure);
// OR check = (parseFloat(figure) == 10) ? check : 10;

// Question 5
let find = 'python'; what = 'jargon';
console.log(find.includes('on') && what.includes('on'));
find.match(/on/gi) && what.match(/on/gi) ? true : false; //alternative way

// Question 6
let course = 'I hope this course is not full of jargon.';
console.log(course.includes('jargon'));


// Question 7
Math.random() * 101;

// Question 8
(Math.random() * 101) + 50;

// Question 9
Math.random() * 256;


// Question 10
let program = 'JavaScript';
seventhLetter = program[6];
console.log(seventhLetter);

// Question 11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

// Question 12
console.log(bcos.substr(31,23));