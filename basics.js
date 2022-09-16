"use strict";
//Primatives-----------------------------------------------------------------------------
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
//number
var age;
age = 12; //allowed
age = "12"; // not allowed, not a number
//string
var userName;
userName = "Max"; //allowed
userName = 43534456; // not allowed, not a string
//boolean
var isInstructor;
isInstructor = true; //allowed
isIntructor = "true"; //not allowed, not a boolean
// More Complex Types: Arrays & Strings -------------------------------------------------
//array
var hobbies;
hobbies = ["sports", "cooking"]; //allowed
hobbies = [12, "reading"]; //not allowed
//object
var person;
person = {
    name: "Max",
    age: 32
};
person = {
    isEmployee: true
};
//Combining the two, an array full of people with name & age data
var people;
//not just a single object with this structure, but an array of them.
//Type inference------------------------------------------------------------------------
var course = "React - The Complete Guide";
course = 12341;
//Functions & types----------------------------------------------------------------------
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
} //void (no return; comparable to null or undefined)
//Generics - allows functions to be type-safe yet flexible -----------------------------
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
var stringArray = insertAtBeginning(["a", "b", "c"], "d");
// updatedArray[0].split('');
//classes & typescript-------------------------------------------------------------------
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    //   {
    //     // this.firstName = first;
    //     // this.lastName = last;
    //     // this.age = age;
    //     // this.courses= courses;
    //   }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}()); //blueprint
var student = new Student("Max", "Shwarz", 32, ["Angular"]);
student.enrol("React");
var max;
max = {
    firstName: 'max',
    age: 32,
    greet: function () {
        console.log('hello');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function (console, log) { };
    return Instructor;
}());
('Hey');
