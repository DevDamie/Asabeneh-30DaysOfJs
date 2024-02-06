// Exercises: Level 1

// Question 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = (prompt('Enter your age:'));

console.log(
    age >= 18 
    ? 'You are old enough to drive.' 
    : `You are left with ${18 - age} years to drive.`
);

alert(
    age >= 18 
    ? 'You are old enough to drive.' 
    : `You are left with ${18 - age} years to drive.`
);


// Question 2- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 50,
    yourAge = (prompt('Enter your age:'));

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
}else if (yourAge < myAge){
    console.log((`I am ${myAge - yourAge} years older than you.`));
}else {
    console.log("We are the same age.");
}


// Question 3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4;
let b = 3;

// using if else
if ( a > b ){
    console.log(`${a} is greater than ${b}.`);
}else{
    console.log(`${a} is less than ${b}.`);
}

// ternary operator
console.log(
    a > b 
    ? `${a} is greater than ${b}.` 
    : `${a} is less than ${b}.`
);


// Question 4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = (prompt('Enter a number'));

if ( num % 2 === 0 ){
    console.log(`${num} is an even number`);
}else{
    console.log(`${num} is ann odd number`);
}

// Ternary operations

console.log(
    num % 2 === 0 
    ? `${num} is an even number` : `${num} is ann odd number`
);

// Switch
switch(true){
    case (score >= 90 && score <= 100):
        console.log(`Your score is ${score}, grade : A`);
        break;
    case (score >= 70 && score <= 89):
        console.log(`Your score is ${score}, grade : B`);
        break;
    case (score >= 60 && score <= 69):
        console.log(`Your score is ${score}, grade : C`);
        break;
    case (score >= 50 && score <= 59):
        console.log(`Your score is ${score}, grade : D`);
        break;  
    case (score >= 0 && score <= 49):
        console.log(`Your score is ${score}, grade : F`);
    default:
        console.log(`Invalid score entered`);
}

/* 2- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

let season = prompt('Enter a month')

// if 

if ( season === 'September' || season === 'October' || season === 'November'){
    console.log('The season is Autumn');
}else if(season === 'December' || season === 'January' || season === 'February'){
    console.log('The season is Winter');
}else if(season === 'March' || season === 'April' || season === 'May'){
    console.log('The season is Spring');
}else if(season ==='June' || season === 'July' || season === 'August'){
    console.log('The season is Summer');
}else{
    console.log('invalid season');
}

