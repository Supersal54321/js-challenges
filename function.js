// const holidayDestinations = () => {
//     console.log ("yay! I am going on holiday")
// }
// holidayDestinations()

// const holidayDestinations = (country, month) => {
//     console.log (`yay! I am going on holiday to ${country} in ${month}. i cant wait.`)
// }
// holidayDestinations("spain","june")

// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log (multiply(2,5))

// const replenishStock = (productCode) => {
//     console.log(`order product number ${productCode} stock is low`)
// }
// const reducePrice = (productCode, originalPrice) => {
//     let salePrice = originalPrice /= 2
//     console.log (`Product number ${productCode} is now £${salePrice}`)
// }
// const checkStock = (productCode, quantity, originalPrice) => {
//     if (quantity <= 10) {
//         replenishStock(productCode)
//     }else if (quantity > 100) {
//         reducePrice(productCode, originalPrice)
//     }else{
//         console.log("dont order stock")
//     }
// }
// checkStock(345678, 200, 100)

const holidayDestinations = () => {
    console.log("yay, i am going on holidays")
}
holidayDestinations()

const sayHello = () => {
    console.log("hi there how are you")
}
sayHello()

const holidayDestination = (country,month) => {
    console.log(`yay! i am going on holiday ${country} in ${month}. I cant wait`)
}
holidayDestination()

const holidayDestination1 = (country,month) => {
    console.log(`yay, i am going on holidays to ${country} in ${month}. i cant wait`)
}
holidayDestination1("spain", "june")