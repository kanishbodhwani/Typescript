// const person: object = {
//     name: "Kanish",
//     age: 20   
// }

// console.log(person.name);

// Above does not work with person.name because we have to be more specific with the object
// =================

// const person: {
//     // Key: type entries
//     name: string;
//     age: number;
// } = {

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Kanish",
//     age: 20,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, 'author']   
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Kanish",
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR    
};


// person.role.push('admin'); 
// person.role[1] = 10; // ERROR!!

// person.role = [0, 'admin', 'user'];

// Error
// let favoriteActivities: string[];
// favoriteActivities = "Sports"

let favoriteActivities: any[];
// favoriteActivities = "Sports"

// (Any) example 
// let favoriteActivities: any[];
// favoriteActivities = ["Sports", 1];

console.log(person.name);

// for(const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// };

if(person.role === Role.AUTHOR) {
    console.log("is author");
};




