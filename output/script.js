"use strict";
//function type
let myFunction;
myFunction = () => {
    console.log("Hello");
};
//props variable type
const parFunc = (a, b, c) => {
    console.log(`Hello ${a} ${b} ${c}`); //can't show c cause of optional variable
};
// parFunc(3,4);
parFunc("Yes", "No");
// void and undefined are not same.
