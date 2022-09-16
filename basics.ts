//Primatives-----------------------------------------------------------------------------

import {
  createEmitAndSemanticDiagnosticsBuilderProgram,
  isConstructorDeclaration,
} from "typescript";

//number
let age: number;

age = 12; //allowed
age = "12"; // not allowed, not a number

//string
let userName: string;

userName = "Max"; //allowed
userName = 43534456; // not allowed, not a string

//boolean
let isInstructor: boolean;

isInstructor = true; //allowed
isIntructor = "true"; //not allowed, not a boolean

// More Complex Types: Arrays & Strings -------------------------------------------------

//array
let hobbies: string[];

hobbies = ["sports", "cooking"]; //allowed
hobbies = [12, "reading"]; //not allowed

//type aliases
type Person = {
  name: string;
  age: number;
};

//object
let person: Person;

person = {
  name: "Max", //allowed
  age: 32,
};

person = {
  isEmployee: true, //not allowed
};

//Combining the two, an array full of people with name & age data

let people: Person[];
//not just a single object with this structure, but an array of them.

//Type inference------------------------------------------------------------------------

let course: string | number = "React - The Complete Guide";

course = 12341;

//Functions & types----------------------------------------------------------------------

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
} //void (no return; comparable to null or undefined)

//Generics - allows functions to be type-safe yet flexible -----------------------------

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('');

//classes & typescript-------------------------------------------------------------------

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}
//   {
//     // this.firstName = first;
//     // this.lastName = last;
//     // this.age = age;
//     // this.courses= courses;
//   }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
} //blueprint

const student = new Student("Max", "Shwarz", 32, ["Angular"]);
student.enrol("React");
//student.listCourses();

// student.courses => Angular, React

//Interfaces -------------------------------------------------------------------------

interface Human {
    firstName: string,
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'max',
    age: 32,
    greet() {
        console.log('hello');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet(
        console.log('Hey');
    )
}
