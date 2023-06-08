// Object Basics : Object is Hashmaping of Java and Dictionaries of Python.

let person = {
    firstName : "Arghajit",
    favcolor : "Blue",
    favNumber : 8,
    isMarried : true,
    children : ("child1", "child2"),
    things: {
        name : false,
        color : "Blue"
    }
}

console.log(person)
console.log(person.firstName)
console.log(person.children)
console.log(person.children[1])
console.log(person.things.color)

//  Activity

let family = {
    father : {
        firstName : "Thomas",
        lastName : "Wayne",
        isAlive : false
    },
    mother : {
        firstName : "Martha",
        lastName : "Wayne",
        isAlive : false
    },
    children : [
        {
            firstName : "Bruce",
            lastName : "Wayne",
            isAlive : true
        }
    ],
    bulter : {
        firstName : "Alfred",
        lastName : "Pennyworth",
        isAlive : true
    },
    isRich : true
}
console.log(family)
console.log(family.isRich)
console.log(family.mother.firstName)
console.log(family.children)
console.log(family.children[0].firstName)

// Methods

var library = {
    book : "JS is Fun",
    checkOut : function() {
        console.log("Checked Out " + this.book)
    },
    checkIn : function(number) {
        console.log("You have checked in " + number+ " books")
    }
}
library.checkIn(2)
library.checkOut()
// library.book
library.checkOut

// Assigning new Values

var Person = {
    firstName : "Jason",
    favNumber : 47,
    isMarried : true,
    children : ["Todd", "Philips"]
    
}
Person.firstName = "Bob"
Person.children[0] = "Hudrru"

// Project

var restuarentMenu = {
    nameOfRes : "Crizoo",
    item : [
        {
            name : "Pasta",
            price : 150
        },
        {
            name : "Biriyani",
            price : 170
        },
        {
            name : "Pizza",
            price : 299
        },
        {
            name : "Fried Rice with chicken",
            price : 250
        },
        {
            name : "Fried special Maggi",
            price : 99
        }
    ],
    menu : function() {
        var menulist =""

        for(let i = 0; i<= 4; i++) {
            menulist += i + ". "  + this.item[i].name + " --> " + this.item[i].price +"\n"
        }
        alert(menu)

        var answer = prompt("Which item would you like to have? Enter the item number.")
        this.selectMenu(answer)
    },
    selectMenu : function(no) {
        alert(this.item[no].name)
    }
}
restuarentMenu.menu()
