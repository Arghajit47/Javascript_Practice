//  Adding properties to object

var person = {
    firstName: "Arghajit",
    lastName: "Singha",
    favColor: "Blue"
}
person.age = 38
delete person.favColor      // To delete property named favColor

// Different way to add methods

var person = {
    firstName: "Arghajit",
    lastName: "Singha",
    myName: function() {
        console.log(this.firstName + " " + this.lastName)
    }
}

var person = {
    firstName: "Arghajit",
    lastName: "Singha",
    myName() {
        console.log(this.firstName + " " + this.lastName + ".")
    }
}

// Getters & Setters

// Getters gets the value as property

var person = {
    firstName: "Arghajit",
    lastName: "Singha",
    get myName() {
        return (this.firstName + " " + this.lastName)

    },
    set myName(value) {
        var name = value.split(" ")
        this.firstName = name[0]
        this.lastName = name[1]
    }
}

// Constructors = Blueprint of a function

var me = {
    firstName: "Jason",
    lastName: "Todd",
    myName() {
        console.log(this.firstName + " " + this.lastName)
    }
}
var bestFriend = {
    firstName: "colin",
    lastName: "Munro",
    myName() {
        console.log(this.firstName + " " + this.lastName)
    }
}

function Person(first, last) {
    this.firstName = first
    this.lastName = last
    this.myName = function() {
        console.log(this.firstName + " " + this.lastName)

    }
}


// Prototype

function Person(first, last) {
    this.firstName = first
    this.lastName = last
    this.myName = function() {
        console.log(this.firstName + " " + this.lastName)

    }
}

Person.prototype.favColor = "Blue"

Person.prototype.printColor = function() {
    console.log(this.favColor)
}

var me = new Person("Jason", "Todd")