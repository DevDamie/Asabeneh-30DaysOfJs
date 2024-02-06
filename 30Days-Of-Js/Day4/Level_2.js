// Exercises: Level 2

/* 1- Write a code which can give grades to students according to theirs scores:
    - 90-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/
// If 
let score = +(prompt('Enter your score:'));
if (score >= 90 && score <= 100){
    console.log(`Your score is ${score}, grade : A`);
}else if(score >= 70 && score <= 89){
    console.log(`Your score is ${score}, grade : B`);
}else if(score >= 60 && score <= 69){
    console.log(`Your score is ${score}, grade : C`);
}else if(score >= 50 && score <= 59){
    console.log(`Your score is ${score}, grade : D`);
}else if(score >= 0 && score <= 49){
    console.log(`Your score is ${score}, grade : F`);
}else {
    console.log(`Invalid score entered`)
}

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

/* 2- Ch;eck if the season is Autumn, Winter, Spring or Summer. If the user input is :
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

// switch

switch (season) {
    case 'September':
    case 'October':
    case 'November':
        console.log('The season is Autumn');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('The season is Winter');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('The season is Summer');
        break;
    default:
        console.log('Invalid season');
}


// 3- Check if a day is weekend day or a working day. Your script will take day as an input.

let today = prompt('What is the day today?');
today = (today.toLowerCase()).charAt(0).toUpperCase() + (today.toLowerCase()).slice(1);

switch(today){
    case 'Saturday':
    case 'Sunday':
        console.log(`${(today)} is a weekend.`);
        break;
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday' :
    case 'Friday':
        console.log(`${(today)} is a working day.`);
        break;
    default:
        console.log("Invalid day.");
}
