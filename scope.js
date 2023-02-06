// let globalVar = "globalVar";
// console.log (`Global Scope: ${globalVar}`);
// //Output: Global Scope: globalVar

// const callVar = () => {
//     console.log(`Inside function: ${globalVar}`);
//     // Output: Inside function: globalVar
// }
// callVar();

let globalVar = "globalVar";
console.log(`Global Scope: ${globalVar}`);
// const callVar = () => {
//     let localVar = "localVar";
//     console.log (`Inside function: ${globalVar}`);
//     console.log(`Inside function: ${localVar}`);
// }
// callVar ();
// console.log(`Global scope with local variable: ${localVar}`);
// //ReferenceError: localVar is not defined
// callVar();
// console.log(`Global scope with local variable: ${localVar}`);
// //ReferenceError: localVar is not defined

const outerFun = () => {
    let outerVar = "OuterVar";
    console.log (`Outer function: ${globalVar}`);
    console.log(`Outer function: ${outerVar}`);
    console.log(`outer function; ${innerVar}`);

    const innerFun = () => {
        let innerVar = "innerVar";

        console.log(`inner function: ${glocalVar}`);
        console.log(`inner function: ${outerVar}`);
        console.log(`inner function: ${innerVar}`);
    }
    innerFun();
}
outerFun();
innerFun(); 