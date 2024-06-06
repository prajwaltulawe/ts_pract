// if aisle is set to 7 the nxt values will be 8 9 10; it follows the previous sequence
enum seatChoice {
    AISLE = 22,
    MIDDLE,
    WINDOW
}

// just use const and it will not generate crazy code
const ptSeat = seatChoice.MIDDLE
console.log(ptSeat)