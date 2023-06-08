// For loop with if else statement

for (var i =1; i<5; i++) {
    if (i ==1){
        console.log("Hello")
    }
    else if (i == 2) {
        console.log("Bye")
    }
    else if (i == 3) {
        console.log("Yo")
    }
    else if (i == 4) {
        console.log("Tata")
    }
    else {
        console.log("Nothing")
    }
}

// Breaking the loop

for (var i = 1; i < 10 ; i++) {
    if (i == 5) {
        break;
    }
    else {
        console.log(i)
    }
}

// Array in the loop

var things = [1,2,"Hello", "Bye"]

for (var i =0; i < 4; i++) {
    console.log(things[i])
}

// Activity

var answer = prompt("Type YES or NO")
var answers = ["YES", "NO"]
var responses = ["You said YES", "You said NO", "You didn't follow the instructions"]

for (var i = 0; i < 2; i++) {
    if (answer != answers[0] && answer != answers[1]) {
        console.log(responses[2])
        break;
    }
    else if (answer == answers[i]) {
        console.log(responses[i])
        break;
    }
}

// Nested For loop

var things = [["hello","bye","tata","see you"],[1,2,3,4]]
for (var i =0; i<2; i++) {
    for (var j = 0; j < 3; j++){
        console.log(things[j])
    }
}

// Activity

var square = ""

for (var i=0; i<5;i++) {
    for (var j = 0; j<5; j++) {
        square = square + "*" 
    }
    square = square + "\n"
}
console.log(square)

// Assignment

var triangle = ""

for (var i = 0; i<5; i++) {
    
    for (var j = 0; j<=i; j++){
        triangle = triangle + "*"
    }
    triangle = triangle + "\n"

}
console.log(triangle)
console.log(i)