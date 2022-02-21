// if (1 === "1"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if (1 != "1"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let place = "Manchester";
// let weather = "Miserable";

// if (place == "Manchester" && weather == "Miserable"){
// console.log("Yeah pretty much all the time");
// }
// else if (place != "Manchester" && weather == "Miserable"){
// console.log("Wrong Area");
// }
// else {
// console.log("Where am I?");
// }

// const grade = 62;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction!");
//         break;
//     case grade >= 60:
//         console.log("Merit!");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// }

// Activity 1

// let age = 34;
// let country = "UK";
// if (age >= 17 && country == "UK"){
//     console.log("Yes I can serve you")
// }
// else if (age >= 17 && country != "UK"){
//     console.log("Would you like to try one of our foriegn drinks?")
// }
// else{
//     console.log("You aren't old enough")
// }

// Activity 2

// let pizzaTopping = "Ham";

// switch (pizzaTopping){
//     case "Ham":
//         console.log("These are important ingredients for my Pizza");
//         break;
//     case "Mushrooms":
//     case "Pepperoni": 
//         console.log(`I don't mind having ${pizzaTopping} on my Pizza`);
//         break;
//     default:
//         console.log(`${pizzaTopping} should not be on my pizza.`)
// }

// Activity 3

// let password = "javascript"

// if (password.length <8){
//         console.log("The password is to short.")
//     }
// else
//     console.log(`Your password is ${password}`)

// Activity 4

// let num = 6
// if (num % 3 == 0 && 5 == 0){
//     console.log("This number is divisble by 3 and 5")
// }
// else{
//     console.log("This number is not divisible by 3 or 5")
// }

// Activity 5

// let num = 45
// if (num % 3 == 0 && 5 == 0){
//     console.log("fizz buzz")
// }
// else if (num % 5 == 0){
//     console.log("buzz")
// }
// else if (num % 3 == 0){
//         console.log("fizz")
// }
// else{
//     console.log(`Your number is ${num}`)
// }

// Activity 6

// let number = 1221
// let numString = number.toString()
// let reverse = numString.split("").reverse().join("")

// if(reverse == numString){
//     console.log("This is a Palindrome");
// }
// else{
//     console.log("This is not a Palindrome");
// }

// Activity 7

// let time = 7
// const placeOfWork = "Manchester"
// const townOfHome = "Walkden"

// if (time == 7){
//     console.log(`I am at my home in ${townOfHome}`)
// }
// else if (time == 8){
//     console.log(`I am communiting from ${townOfHome} to ${placeOfWork}`)
// }
// else if (time == 9){
//     console.log(`I am at work in ${placeOfWork}`)
// }
// else{
//     console.log("I'm doing other stuff")
// }

// Activity 8

// const jargon = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// let y = jargon.toLowerCase();
// let indexOfLastVowel = Math.max(y.lastIndexOf("a"), y.lastIndexOf("e"), y.lastIndexOf("i"), y.lastIndexOf("o"), y.lastIndexOf("u"));
// console.log(`The last vowel is ${jargon.charAt(indexOfLastVowel)}`);

// Activity 9

// let word = "scored"
// if(word.charAt(0) == word.charAt(word.length-1)){
//     console.log("The characters are the same");
// }
// else{
//         console.log("The characters are not the same");
//     }

// Activity 10

// num1 = 2
// num2 = 5

// if ((num1 + num2) % 2 === 0 ){
//     console.log(num1+num2);
// }
// else{
//     console.log(num1*num2);
// }
