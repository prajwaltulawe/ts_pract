"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function registerUser(name, phone, subscribed) {
    return { name: name, phone: phone, subscribed: subscribed };
}
var user = function (name, phone, subscribed) {
    if (subscribed === void 0) { subscribed = false; }
    return { name: name, phone: phone, subscribed: subscribed };
};
console.log(addTwo(5));
console.log(getUpper("5"));
console.log(registerUser("Prajwal", 7777, true));
console.log(user("Prajwal", 7777));
function getNumber(num) {
    return num + 2;
}
var fullName = function (name) {
    return name + " Tulawe";
};
var heros = ["thor", "marvel", "chondu", 1, true];
heros.map(function (hero) {
    return "hero iz : ".concat(hero);
});
console.log(fullName("Prajwal"));
console.log(getNumber(5));
// it means that the function returns nothing
function consoleError(errMsg) {
    console.log(errMsg);
}
// it means that the function throws an exception or terminates the program
function handleError(errMsg) {
    throw new Error(errMsg);
}
