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

let evenNumbers = []
for (let n = 0; n < 20; n++){
    if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}
console.log (`the even numbers between 0 and 20 are: ${evenNumbers}`)