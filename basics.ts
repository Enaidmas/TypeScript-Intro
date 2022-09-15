//Primatives

//number
let age: number;

age = 12; //allowed
age = '12' // not allowed, not a number

//string
let userName: string;

userName = 'Max'; //allowed
userName = 43534456; // not allowed, not a string

//boolean
let isInstructor: boolean;

isInstructor = true; //allowed
isIntructor = 'true'; //not allowed, not a boolean

// More Complex Types: Arrays & Strings

//array
let hobbies: string[];

hobbies = ['sports', 'cooking']; //allowed
hobbies = [12, 'reading'] //not allowed

//object
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',  //allowed
    age: 32
};

person = {
    isEmployee: true  //not allowed
};

//Combining the two, an array full of people with name & age data

let people: {
    name: string;
    age: number;
}[];
//not just a single object with this structure, but an array of them.


