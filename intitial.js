console.log("Henlo.");
// welcome to another backend langauge. We got this.
console.log(3); //numbers are cool without any embelishments
console.log(3 + 4 * 6 / 7 % 1); //all the arithmetic operators are the same
console.log("Hello" + "World"); //concatenation
console.log(Number.isInteger(2017)); // returns boolean true/false if integer or not
console.log("Hello".length); //checks length of words inside

var favoriteFood = "pizza";
var numOfSlices = 8;

console.log(favoriteFood);

let meal = 'Enchiladas'; //new way of assigning variables
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let changeMe = true;
//booleans don't require quotations
changeMe = false;
//log value to console means console.log();
console.log(changeMe);

let levelUp = 10;
levelUp += 5;
let powerLevel = 9001;
powerLevel -= 100;
let multiplyMe = 32;
multiplyMe *= 11;
let quarterMe = 1152;
quarterMe /= 4;

// Use the mathematical assignments in the space below:






// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//concatenation
let favoriteAnimal = "kitten";
console.log("My favorite animal:" + favoriteAnimal);

//string interpolation- `${myCity}`
let myName = "Elhanah";
let myCity = "Montreal";
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//overview
//let myCity = "Montreal";
myCity = "New Brunswick";
console.log(`my favorite city is ${myCity}`);
var myPlace = "pieIX";
const pie = "3.14";

console.log("my favorite place is " + myCity + "and " + myPlace);
console.log(`${pie} is used in most mathematical operations`);

//console.log(test);
//const test = "figures"; //gives an undefined error
console.log(typeof myCity);//syntax is correct
//end of overview
print(myCity);
pickRandom(string);//still figuring out this one

var ingredients = ['flour', 'eggs', 'sugar'];//this is how arrays with strings work here
var egarray = ['breeze' , 5 , 20 , [34,56]];//array nesting

//another project/module
const kelvin = 293;
//just created a constant variable that contains the value of Kelvin as 293
const celsius = kelvin - 273;
//establishing the mathematics for a converter
var Fahrenheit = celsius * (9/5) + 32;
//creating a formula for calculating fahrenheit
//console.log(.floor(Fahrenheit)); - okay attempt but you forgot the math part.
//updating a value of a varible doesn't require any of the var or const or whatever.
Fahrenheit = (Math.floor(Fahrenheit));
//rounding the results down to a whole number.
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
var Newton = celsius  * (33/100);//not const becuause then the value vannot be changed.
Newton = (Math.floor(Newton));
console.log(`The temperature is ${Newton} in Newtons.`);


//a dog years calculator
var myAge = 21;
//das my age bro.
let earlyYears = 2;
//basically the beginning of the dog years
earlyYears = 10.5 * earlyYears; // reassigning a value
let laterYears = myAge - 2; // every year after the first two
laterYears = laterYears * 4; // reassigning a value
console.log(`${earlyYears}`);
console.log( `${laterYears}`);
let myAgeInDogYears = earlyYears + laterYears; //total age
//let myName = "Elhanah Otasowie";
console.log(myName.toLowerCase());
myName = "Elhanah Otasowie".toLowerCase(); //change the case of the words

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); //the conclusion of the whole project

