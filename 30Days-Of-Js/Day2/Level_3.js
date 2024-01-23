// Exercise: Level 3

// Question 1
let charity = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(charity.match(/love/gi));

// Question 2
let bcos = 'You cannot end a sentence with because because because is a conjunction'
console.log(bcos.match(/because/g));

// Question 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/[^a-zA-Z0-9.,?!'\s]/g, '')); 
//a caret symbol inside a character class like this [^...] matches any character that is not listed inside the square brackets.


// Question 4
let paySlip = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
monthly = paySlip.match(/\d+/g);
income = [parseInt(monthly[0]), parseInt(monthly[1]), parseInt(monthly[2])];
annual = ((income[0])*12) + (income[1]) + ((income[2])*12);
annualIncome = `His total annual income is ${annual} Euros.`;
console.log(annualIncome);