// Not necessary
function add(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(10, 20));
// Function types
var combineValues;
combineValues = add;
// combineValues = printResult; // ERROR 
console.log(combineValues(8, 8));
