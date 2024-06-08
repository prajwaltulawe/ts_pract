// narrowing is nothing more than type checking
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getUTCDate());
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird fish";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        console.log("circle");
    }
    // else use switch with default to handle if anytime any new Shape is added
    // never gives error if any case is not handled, so we know what is not handled
}
