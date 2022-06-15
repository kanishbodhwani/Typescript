// Not necessary
function add(n1: number, n2:number): number {
    return n1 + n2;
};

function printResult(num: number): void {
    console.log("Result: " + num);
}

printResult(add(10, 20));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// Function types
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; // ERROR 

console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});

// The unknown type 
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = unknown; // Error // Works with any 

// Can also use void 
// Never type means never return anything 
function generateError(message: String, code: number): never {
    throw{message: message, error: code};
}; // This funtion returs never type

const result = generateError("Error occured", 500);
console.log(result);


// A function with infitnite loop also never returs anything


