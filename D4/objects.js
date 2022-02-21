// const person = {
//     name: "christopher",
//     age: 34,
//     favSongs: ["Shadowbringers", "The Long Fall", "Oblivion"]
// }

// console.log(person)

// let day = "Saturday";
// let alarm = "";

// const set = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }
// if ((day == "Saturday") || (day == "Sunday")){
//     console.log(set.weekendAlarm);
// }
// else console.log(set.weekdayAlarm);


// Activity 1

// const person = {
//     name: "Christopher",
//     age: 34,
//     favSongs: ["The Long Fall", "Who Brings Shadow", "Footfalls"],

//     sayHi(){
//         return `Hello my name is ${this.name}`
    
//     }
// }
// console.log(person.sayHi())

// Activity 2

// const pet = {
//     petName: "dippo",
//     typeOfPet: "cat",
//     age: 10,
//     colour: "brown",

//     eat(){
//         return `${this.petName} is eating`
//     },
//     drink(){
//         return `${this.petName} is drinking`
//     }
// }

// console.log(pet.eat());
// console.log(pet.drink());

// Activity 3

// const coffeeShop = {
//     branch: "Somewhere",
//     drinksWithPrices: ["Coffee", 2.50, "Tea", 2.00],
//     foodWithPrices: ["Sandwich", 2.00, "Cake", 1.50],

//     drinkOrder(){
//         return `Your drink order is ${this.drinksWithPrices[0]} and ${this.drinksWithPrices[2]}`;
//     },

//     foodOrder(){
//         let totalPrice = this.drinksWithPrices[1] + this.drinksWithPrices[3] + this.foodWithPrices[1] + this.foodWithPrices[3]
//         return `Your food order is ${this.foodWithPrices[2]} and ${this.foodWithPrices[0]}, totalling £${totalPrice}.`;
//     }
// }

// console.log(coffeeShop.drinkOrder(), coffeeShop.foodOrder());