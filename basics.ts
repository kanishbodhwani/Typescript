function add(n1: number , n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}


// let number: number = 5;  Not recommended 
// Typescript already understands this

// We can do this 
let x: number;
// x = "5"; // Gives error because x is a number 

const number1 = 5;
const number2 = 2.6;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);