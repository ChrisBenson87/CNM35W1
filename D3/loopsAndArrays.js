// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's New"
// ]

// coffeeOrder[1] = "Ann - Vanilla Latte"

// coffeeOrder.push("Donna - Espresso")

// coffeeOrder.pop()

// console.log(coffeeOrder)

// console.log(coffeeOrder.length)

// let favouriteSongs = [
//     "The Primals - The Long Fall",
//     "The Primals - Oblivion",
//     "The Primals - Footfalls"
// ];

// console.log(favouriteSongs)

// favouriteSongs.push("The Primals - Under the Weight", "The Primals - The Extreme");

// console.log(favouriteSongs)

// favouriteSongs.pop();

// console.log(favouriteSongs)

// favouriteSongs.splice(1, 0, "The Primals - Shadowbringers");

// console.log(favouriteSongs)

// let favouriteDrinks = [
//     "Tea",
//     "Coffee",
//     "Coke"
// ];

// for(let i = 0; i < favouriteDrinks.length; i++){

// console.log(favouriteDrinks[i]);
// }

// let multiplesTwo = [];
// for(let i = 0; i <= 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// let age = 15;

// while( age < 18 ){
//     console.log("You're a child");
//     age++;
// }

// console.log("You're an Adult");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);

// Activity 1

// let favouriteFilms = ["The Incredibles", "Layer Cake", "Die Hard", "The Nightmare Before Christmas", "The Avengers"];
// console.log(favouriteFilms);
// favouriteFilms.push("Monsters Inc", "Tomb Raider");
// console.log(favouriteFilms);

// for(let i = 0; i < favouriteFilms.length; i++){
//     console.log(favouriteFilms[i]);
// }

// Activity 2

// let lotteryNumbers = ["", "", "", "", "",""];
// for(let i = 0; t = 50; i < lotteryNumbers.length; i++){
//     lotteryNumbers.push(Math.round(Math.random() * t))
// }
// console.log(lotteryNumbers[i]);

// for(i = 0; i < 6; i++){
// console.log(Math.floor(Math.random() * 50));
// }

// Activity 3

// for(let i = 1; i < 10; i++){
// console.log(i); // sets i to 1 and if 1 is between 10 repeates the number but adds 1 until 10 is reached 
// }
// for(let j = 9; j > 0; j--){
//     console.log(j); // sets j to 9 and checks if its reached 0 yet if not it repeats the number but - 1 every time
// }

// Activity 4

// let cinemaFilms = ["Film 1", "Film 2", "Film 3", "Ghostbusters"];
// for(let i = 0; i < cinemaFilms.length; i++){
//     console.log(cinemaFilms[i]); // Logs the list as a list rather than the raw file
// }

// if(cinemaFilms[3] == "Ghostbusters"){
//     console.log("Yay it's Ghostbusters") // checks if the 3rd item in the list is correct and logs the appropiate response
// }
// else{
//     console.log("Boo we want Ghostbuster") // otherwise it logs this
// }

// Activity 5

// for(i = 0; i < 6; i++){
// let num = (Math.floor(Math.random() * 30)); // Stores the number as a variable
// if (num % 7 == 0)
//     console.log(`${num} is divisble 7`); // Checks if the number is divisible by 7 if so logs it to the console and says its divisble by 7
// else
//     console.log(num); // If the number isn't divisible by 7 just logs the number
// }

// Activity 6

// let myFollowers = ["Bob", "Fred", "George", "Zack"];
// let friendsFollowers = ["Andy", "Chrstie", "George", "Fred"];

// let match = []; // Stores a new variable with nothing in it
// for(let i = 0; i <myFollowers.length; i++){ // checks all the items in array 1 and stores them to i
//     if (friendsFollowers.indexOf(myFollowers[i]) != -1){ // checks array 2 against i from array 1 and if any arent equal to array 1 deletes them
//         match+=myFollowers[i]+[]; // any items that are a match adds them to the new vairable
//     };
// }

// console.log("Mutual Followers are: "+ match) // logs the new variable.