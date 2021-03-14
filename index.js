let student = "Junaid";
console.log(student);

//Variables 
//  connot be a reserved keyword
//  Should be meaningful
//  Cannot start with a number
//  cannot contain a space or hyphen
//  are case-sensitive

let firstName = "Junaid", lastName = "Ali";
let fullName = firstName + lastName;

//Constants
let interestRate = 3.1;
interestRate = 1;
console.log(interestRate);

//Primitive Types / Value Types
let name = "Junaid";    //string
let age = 15;           //Number
let isApproved = true;  //Boolean
// let firstName = undefined;
// let lastName = Null;

//Dynamic Programming
let hy = "there";
hy = 1;

//Object
let person = {
    address : "KARACHI",
    age : 31
}
console.log(person);

//Dot notation              //Best easy method to use 
person.address = "Hyderabad";
person.age = 15;

console.log(person.age);

//Bracket Notation
person["address"] = "Larkana";

//Array             //Array type is object
let selectedColours = ["red","blue","green"];
console.log(selectedColours);
console.log(selectedColours[0]);
console.log(selectedColours[1]);

//Adding element into the array
selectedColours[3] = "orange";
console.log(selectedColours[3]);

//Function

//No Argument
function Hy(){
    console.log("Hello World!");
}
Hy();

//With argument
function greet(firstName){
    console.log("Hello, " + firstName)
}
greet(firstName);

//with Multiple Arguments
function Name(fName,lName){
    console.log("Hello, "+firstName+ " " + lastName)
}
let fName = "Junaid", lName = "Ali";
Name(fName,lName);

//Types of Functions

//Calculating function
function square(number){
    return number * number;
}
let number = 4;
console.log(number);

console.log(sqaure(3));