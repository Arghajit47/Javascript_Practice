var stuff = ["test",1,2,3,true]

// pop & push

var container = ["red", "blue","yellow", "brown"]
container.pop()
container.push("orange")

//Shift & Unshift

var container = ["red", "blue","yellow", "brown"]
container.shift()
container.unshift("Purple")
container[3] = "red"

// Splice & Slice

container.splice(0,2,"black")  // Add black but delete 0th & 1st index element
container.splice(0,1)  //removes the first element

var newContainer = container.slice(3)


// Activity all the things

var things = []
var answer
answer = prompt("What is your first important thing?")
things.push(answer)

answer = prompt("What is your second important thing?")
things.push(answer)

answer = prompt("What is your third important thing?")
things.push(answer)
console.log(things)


//Project

var things = []
var answer
answer = prompt("What is your first book?")
things.push(answer)

answer = prompt("What is your second book?")
things.push(answer)

answer = prompt("What is your third book?")
things.push(answer)

answer = prompt("What is your fourth book?")
things.push(answer)

answer = prompt("What is your fifth book?")
things.push(answer)

answer = prompt("What is your sixth book?")
things.unshift(answer)

things.pop()

console.log(things)
