// let favHolidayDestinations = [
//     "venice, italy",
//     "paris, france",
//     "barcelona, spain"
// ]
// // for (let i = 0; i < favHolidayDestinations.length; i++){
// //     console.log(favHolidayDestinations[i])
// // 
// for (let i = 2; i < favHolidayDestinations.length; i++){
//     console.log(favHolidayDestinations[i])}

// let evenNumbers = []
// for (let n = 0; n < 20; n++){
//     if (n % 2 == 0) {
//         (evenNumbers.push(n))
//     }
// }
// console.log (`the even numbers between 0 and 20 are: ${evenNumbers}`)

let favHolidayDestinations = [
    "venice,Italy",
    "Paris,France",
    "Barcelona,Spain"
]
// console.log(favHolidayDestinations[0])
// console.log(favHolidayDestinations[1])
// console.log[favHolidayDestinations[2]]
for (let i = 0; i < favHolidayDestinations.length; i++){
    console.log(favHolidayDestinations[i])
}

for (let i = 0; i<= 10; i++){
    console.log(i += 2)
}

let evenNumbers = []
for (let n = 0; n < 20; n++){
    if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}
console.log(`the even numbers between 0 and 20 are; ${evenNumbers}`)

let lives = 3
while (lives > 5){
    console.log("well done! you are still in the game")
}
console.log ("game over")

let currentDiceRoll = "3"
while(currentDiceRoll != 1){
    console.log(currentDiceRoll)
    currentDiceRoll = Math.floor(Math.random()*6)+1
}
console.log(currentDiceRoll)