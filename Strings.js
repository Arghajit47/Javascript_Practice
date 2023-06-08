// Strings Method

var thing = "Hello"
thing.length

var thing = "Hello World"
thing.length

// Password

if (String.length > 5) {
    // do something
}

// Using indexOf & search

var sentence = "I say hello and you say hello"

// First occourence of the string
sentence.indexOf("hello")

// What if we search somethings index which is not present, We will get output -1.
sentence.indexOf("z")

// Last occourence of the string
sentence.lastIndexOf("hello")

// Search (It will give the first occourence of the string)
sentence.search("hello")



// Taking a slice or substring or substr

var str = "Happy, Excited, Clam"
// 1
var sl = str.slice(7, 14)
console.log(sl)
// 2
var sl = str.slice(7)
console.log(sl)
// 3
var sl = str.slice(-13, -6)
console.log(sl)
// 4
var sl = atr.slice(-13)         // Same as number 2 example    
console.log(sl)



var str = "Happy, Excited, Clam"
// 1
var sb = str.substring(7, 14)
console.log(sb)
// 2
var sb = str.substring(7)
console.log(sb)
// 3
var sb = str.substring(-13, -6)         // substring doesn't allow you to use negative indexes
console.log(sb)
// 4
var sb = str.substring(-13)
console.log(sb)



var str = "Happy, Excited, Clam"
// 1
var sr = str.substr(7, 7)           //str.substr(starting index, length)
console.log(sr)
// 2
var sr = str.substr(7)
console.log(sr)
// 3
var sr = str.substr(-13, 7)         
console.log(sr)
// 4
var sr = str.substr(-13)
console.log(sr)



//  Replacing Content

var str = "I have turkey for lunch and turkey for dinner also"
var lunch = str.replace("turkey" , "Italian")
console.log(str)
console.log(lunch)

lunch = str.replace(/TURKEY/i, "pasta")     // To eliminate the case sensitivity
console.log(lunch)

lunch = str.replace(/turkey/g, "pasta")     // To replace all the 'turkey' in the statement
console.log(lunch)

lunch = str.replace(/turkey/gi, "pasta")        // To eliminate both case sensitivity & all the 'turkey' in the statement
console.log(lunch)


var word = "happy"
var upper = word.toUpperCase()
console.log(upper)
var lower = upper.toLowerCase()
console.log(lower)


var sentence = " Hello World "
var clean = sentence.trim()
console.log(clean)              // Trims the starting and ending spaces but not the middle spaces
var clear = sentence.trim("H")          //Will not trim the 'H' letter


var str = "1,2,3,4,5"
var arr = str.split(",")            //Converting Strings into an array
console.log(arr)

var name = "Arghajit Singha"
var list = name.split(" ")          //Splitng the name into firstName and lastName 
console.log(list)

var name = "Arghajit"
var list = name.split("")           //Spliting the string into letters

// Converting Strings o numbers

var num = "47"
var newNum = Number(num)
console.log(newNum)

var newNum = Number("100.55")
console.log(newNum)                 //Will print out the exact float number

var num = parseInt("5.5")           // Prints only the int part
console.log(num)

var num = parseFloat("5.5")         // Prints the float part also
console.log(num)


// Project


var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

story = story.replace(/cheeseburgers/gi, "hamburgers")      // Replacing all "cheeseburgers with "hamburgers"
story = story.replace(/bun/g, "BUN")                // Replacing all "bun" with "BUN"
console.log(story)

var wordCount = story.split(" ")        
console.log(wordCount.length)           // Words present in the story
console.log(story.length)               // Letters present in the story