// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds")
// }

// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log("Stopping the Grind...");
//         coffeeIsGrinding = true;
//     }
//     else{
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = false;
//     }
// }

// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal();

// let accnumber = 3527685;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from` )
// }

// const addup = (num1 + num2) => {
//     return num1 + num2;
// }

// addup(7,3);
// console.log(addup);

// Activity 1 

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else{
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(20));

// Activity 2

// let orderCount = 0;

// const takeOrder = (topping, toppingextra) => {
//     console.log(`${orderCount} Pizza with ${topping}`);
//     console.log(`Extra Topping: ${toppingextra}`);
//     orderCount++;
// }

// takeOrder("pineapple", "mushroom");
// takeOrder("ham", "pepperoni");
// takeOrder("sausage", "mushroom");

// Activity 3

// let balance = 100; // sets the amount of the balance
// const pin = 1234; // sets the pin number
// accountnum = 01234567;

// const cashMachine = (pinnum, amount) => { // names the function with variables we will call later
//     if ((pinnum === pin) && (amount <= balance)){ // checks the variables in the function to the variables earlier variables
//         balance = balance - amount;
//         console.log(`Withdrawing ${amount} from account ${accountnum}`); // if the variables from the function meets the requirements in the eariler variables do this
//     }
//         if((pinnum === pin) && (amount > balance)){
//             console.log("Not enough funds");
//         }

//     else {
//         console.log("Error") // otherwise do this
//     }
// }
// cashMachine(1234, 50); // note the numbers can be whatever