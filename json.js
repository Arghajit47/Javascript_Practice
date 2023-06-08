//  JSON data Baiscs
// JavaScript object Notation
// JSON is not just a file format. It can e used as the data stored in a variable.
//  Keys need to be wrapped inside ""
// No functions are allowed  as values in the JSON

[
    {
        "firstName" : "Jason"
    }
]  

//  JSON path
// Pretty Print
// We use this kind to show the code properly



var school = {
    "name" : "learning js",
    "classes" : [
        {
            "title" : "Cooking is fun",
            "teacher" : "Mr.Jones",
            "courses" : "A123",
            "credits" : 3
         
        },
        {
            "title" : "Salads for people who liked salads ",
            "teacher" : "Ms. Cha",
            "courses" : "B456",
            "credits" : 0
         
        },
        {
            "title" : "Soup for your belly",
            "teacher" : "Adam Smith",
            "courses" : "C789",
            "credits" : 1
         
        }
    ]

}
school
school.name
school.classes[1].teacher

// Minified JSON
// We use this kind to save up space in files

var school = {"name":"learning js","classes":[{"title":"Cooking is fun","teacher":"Mr.Jones","courses":"A123","credits":3},{"title":"Salads for people who liked salads ","teacher":"Ms. Cha","courses":"B456","credits":0},{"title":"Soup for your belly","teacher":"Adam Smith","courses":"C789","credits":1}]}
