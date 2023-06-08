// Functions
// Defining a function


const message = function() {
    console.log("Hello There!")
}
message()

// Declaring a function

function message() {
    console.log("Hello There!")
}
message()


function message() {
    console.log(1)
    console.log(2)
    console.log(3)
}
message()

//  Returning Data

function getMessage() {
    return "Are you there?"
}
getMessage()
console.log(getMessage())


// Activity

function getCost() {
    // cost of Oranges
    return 5
}
console.log("$" + getCost())
console.log(getCost() + 5)

// Passing parameters


function messages(message1, message2) {
    console.log(message1)
    console.log(message2)
}
messages("Hi", "Hello")


// Activity

function calculation(length, width) {
    var area = length*width
    return area
}
calculation(12, 6)

// Project

var money = prompt("What is your original cost amount?")

function amount(money1) {
    var newCost
    var cost = 50
    

    newCost = cost - money1

    return newCost
}
// amount(money)

if (amount(money) == 0) {
    console.log("You gave the exact amount")
}
else if (amount(money) < 0) {
    console.log("You gave too little. Your change due is $" + amount(money))
}
else if (amount(money) > 0) {
    console.log("You gave too little. You still owe $" + amount(money))
}
