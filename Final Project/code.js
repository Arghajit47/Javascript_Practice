// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
// const colors = ["", ""]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Bruce",
        lastName: "Wayne"
    },
    {
        firstName: "Clerk",
        lastName: "Kent"
    },
    {
        firstName: "Berry",
        lastName: "Alen"
    },
    {
        firstName: "Irish",
        lastName: "Joseph"
    },
    {
        firstName: "Diana",
        lastName: "Prince"
    },
    {
        firstName: "Hal",
        lastName: "Jorden"
    },
    {
        firstName: "Jhon",
        lastName: "Jones"
    },
    {
        firstName: "Syarra",
        lastName: "Lane"
    },
    {
        firstName: "Selina",
        lastName: "Kyle"
    }
]

// Base random function used in every random function
function randomNumberGenerator(max, min) {
    let rand = Math.floor(Math.random() * (max -min + 1) + min)
    return rand
}
// Returns a random number between 1-100 
function generatorOneToHundred() {
    document.getElementById("p1").innerHTML = randomNumberGenerator(1,100)
}
// Returns a random number between Start-End
function generateStartToEnd() {
    let start = document.getElementById("r1").value
    let end = document.getElementById("r2").value
    document.getElementById("p2").innerHTML = randomNumberGenerator(end, start)
}
// Returns a long Lorem Ipsum String
function returnLorem() {
    document.getElementById("p3").innerHTML = Lorem
}
// Returns a Lorem Ipsum String based on the number or sentences specified
function loremSentences() {
    let val = document.getElementById("loremSentence").value
    let loremArr = Lorem.split(".")
    let newLoremArr = ""
    for(let i = 0; i < val; i++) {
        newLoremArr = newLoremArr + loremArr[i] +". "
    }
    document.getElementById("p4").innerHTML = newLoremArr
}
// Returns a Lorem Ipsum String based on the characters of sentences specified
function loremChars() {
    let val = document.getElementById("loremChar").value
    let charArr = Lorem.split("")
    let newCharArr = ""
    for(let i = 0; i < val; i++) {
        newCharArr = newCharArr + charArr[i]
    }
    document.getElementById("p5").innerHTML = newCharArr
}
// Returns the current date(formatted)
function newDate() {
    var myDate = new Date()
    document.getElementById("p6").innerHTML = myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()
}
// Returns the current time(formatted)
function newTime() {
    var myTime = new Date()
    document.getElementById("p7").innerHTML = myTime.getHours() + ":" + myTime.getMinutes() + ":" + myTime.getSeconds()
}
// Converts Inches to Feet
function convert() {
    let inch = document.getElementById("inchToFeet").value
    document.getElementById("p8").innerHTML = inch *0.0833333
}
// Convert Feets to Inches
function revConvert() {
    let feet = document.getElementById("feetToInch").value
    document.getElementById("p9").innerHTML = feet * 12
}
// Compares if two words are the same length
function compare() {
    let w1 = document.getElementById("word1").value.length
    let w2 = document.getElementById("word2").value.length
    if (w1 == w2) {
        document.getElementById("p10").innerHTML = "Same Length Words."
    }
    else {
        document.getElementById("p10").innerHTML = "Not Same Length Words."
    }
}
// Returns random Password
function password() {
    let newPassword = ""
    let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','@','!','#']
    for (i = 0; i <= 7; i++) {
        let pass = randomNumberGenerator(0, chars.length)
        newPassword = newPassword + chars[pass]
    }
    document.getElementById("p11").innerHTML = newPassword
}
// Tells you if the number is even or odd
function evenOdd() {
    let num = document.getElementById("num").value
    if (num % 2 == 0) {
        document.getElementById("p12").innerHTML = "Even"
    }
    else {
        document.getElementById("p12").innerHTML = "Odd"
    }
}
// Random Color Generator
function colorGenerator() {
    let colors = ["Red","Blue","Green","Orange","White","Black","Yellow","Purple","Silver","Brown","Gray","Pink","Olive","Maroon","Violet","Charcoal","Magenta","Bronze","Cream","Gold","Tan","Teal","Mustard","Navy Blue","Coral","Burgundy","Lavender","Mauve","Peach","Rust","Indigo","Ruby","Clay","Cyan","Azure","Beige","Off White","Turquoise","Amber","Mint"]
    let option = randomNumberGenerator(0, colors.length - 1)
    document.getElementById("p13").innerHTML = colors[option]
}
// Returns a random first & last Name
function randName() {
    let firstName = names[randomNumberGenerator(0, names.length-1)].firstName
    let lastName = names[randomNumberGenerator(0, names.length-1)].lastName
    document.getElementById("p14").innerHTML = firstName + " " + lastName
}
