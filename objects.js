"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Prajwal",
    std: 15,
    isActive: true
};
function createUser(_a) {
    var string = _a.name, number = _a.std, boolean = _a.isActive;
}
createUser({ name: "string", std: "number", isActive: true });
function createCourse() {
    return { name: "course", price: 789 };
}
function makeUser(user) {
    return user;
}
var newUser = makeUser({ name: "Pajya", email: "p@p.c", isActive: true });
console.log(newUser);
