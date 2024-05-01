"use strict";
//----------------------------------NAMED FUNCTION------------------------------------------------------------
//Declare & call a function by its given name
function message() {
    console.log("Hello!How are you?");
}
message();
//--------------------------------FUNCTION PARAMETERS---------------------------------------------------------
//Values or arguments passed in a function
function comments(name, age, education) {
    console.log(`My name is ${name},my age is ${age} & I am  a ${education}.`);
}
comments("Sabreena", 25, "Bachelor student");
//---------------------------------DEFAULT PARAMETERS-----------------------------------------------------------
//Is assign to auto value
function sum(a = 5, b = 6) {
    console.log(a + b);
}
sum();
sum(10, 5);
sum(undefined, 6);
sum(undefined, undefined);
//----------------------------------RETURN FUNCTION-------------------------------------------------------------
//Return is like a special "give back"..
function greeting(name, type) {
    return (`Hello ${name}!"${type}"`);
}
console.log(greeting("Daniyal", "Good Morning"));
//*************************************************************************************************************
//********************following functions returns the addition of it's two parameters******************************
function Addition(dig, digTwo) {
    return (dig + digTwo);
}
console.log(Addition(5, 3));
//********************following functions returns the subtraction of it's two parameters*****************************
function Subtract(num, num1) {
    return (num - num1);
}
console.log(Subtract(8, 4));
//********************following functions returns the division of it's two parameters********************************
function Division(dig2, dig3) {
    return (dig2 / dig3);
}
console.log(Division(10, 5));
//********************following functions returns the multiplication of it's two parameters****************************
function Multiply(dig4, dig5) {
    return (dig4 / dig5);
}
console.log(Division(15, 5));
