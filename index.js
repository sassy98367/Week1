console.log("Hello World");
//console.log('<p class="bold">Georges paragragh');

let firstName = "George";
let lastName = 'Heeres';

console.log('Hello ' + firstName);
let gretting = 'Hello ' + firstName;
console.log(gretting);

let name = lastName + ', ' + firstName;
console.log(name);

let age = 46;
console.log(age);

const legalVotingAge = 18;
console.log('The legal voting age is: ' + legalVotingAge);

console.log(firstName + ' has been able to vote for ' + (age - legalVotingAge) + ' years');

let isOld = true;
console.log('isOld: ' + isOld);
isOld = ! isOld;
console.log('isOld: ' + isOld);

let a = "a";
let b = "b";
console.log("a==b: " + (a == b));
let a2 = "a";
console.log("a2==a: " + (a2 == a));
let a3 = "A";
console.log("a3==a: " + (a3 == a));

// (F - 32) * 5/9
let temperature = 78; // 25.6C
let celsius = (temperature - 32) * 5 / 9;
console.log('Temperature: ' + temperature + 'F is ' + celsius.toFixed(2) + 'C');

{
    let birthdate = new Date('11/22/1975');
    console.log(birthdate)
}
//console.log(birthdate);

// number is even or odd?
let number = 9;
//console.log(number + ' is even: ' + ((number % 2) == 0));
let remainder = number % 2;
console.log(number + 'is even: ' + (remainder == 0));

number = 8;
console.log(number + ' is even: ' + ((number % 2) == 0));




