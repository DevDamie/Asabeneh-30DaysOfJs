// Exercises: Level 3

// Question 1: create a human readable format for date
const d = new Date(); // to get a new (current, updated) date each time

let mins = d.getMinutes();
mins < 10 ? '0' + mins.toString(): mins;
let hours  = d.getHours();
hours < 10 ? '0' + hours.toString(): hrs;

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

console.log(`${year}-${month+1}-${date}  ${hours}:${mins}`);