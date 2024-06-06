// if aisle is set to 7 the nxt values will be 8 9 10; it follows the previous sequence
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 22] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 23] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 24] = "WINDOW";
})(seatChoice || (seatChoice = {}));
var ptSeat = seatChoice.MIDDLE;
console.log(ptSeat);
