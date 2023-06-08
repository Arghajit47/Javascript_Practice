var num =1234
var str = num.toString()
console.log(str)

(123.55).toString()

var x  = 5.556
x.toExponential(2)
x.toExponential(5)

var x = 5.556
x.toFixed(1)            // Will start the count afteer the decimals
x.toFixed(5)

var x = 5.556
x.toPrecision(2)         // Will start the count from before the decimals itself


// Not a number = NaN

Number("ts")              // It will convert the string number to the number, not string to number

// Math()

Math.PI
Math.round(4.4)
Math.pow(5,2)           // = 5^2 =25
Math.sqrt(5)
Math.ceil(4.3)          // Rounds up to 5
Math.floor(4.3)         // Rounds down to 4
Math.min(1,23,34,53,65,190)
Math.max(1,23,34,53,65,190)
Math.random()            // Provides random decimal number from 0 to 1


// Project

function randNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var num = Math.floor(Math.random() * (max - min)) + min
    console.log(num)
}