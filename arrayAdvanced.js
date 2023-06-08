var arr = [1,2,3,4,5,6,7,8,9,10]
arr.length                              // .length isn't a method but a property

var arr = ["Good", "Morning"]
arr.toString()


var arr = ["Good", "Morning"]
arr.join(" | ")


var arr1 = [1,2,3,4]
var arr2 = [5,6,7,8]
var arr3 = [9,10,11,12]
var newArr = arr1.concat(arr2)
var newArr = arr1.concat(arr2, arr3)


var arr = ["str", "int", "float", "double", "boolean"]
arr.sort()
arr.reverse()

var arr = [25, 5 , 500, 400, 6]                 //Cause number array cannot be sorted using 'sort()'
arr.sort(function(a,b) {return a-b})

var arr = [25, 5 , 500, 400, 6]
arr.sort(function(a,b) {return b-a})            // To get the number array

//  Array forEach and map

var num = [1,2,3,4,5,6]
num.forEach(funky)
function funky(value, index, array) {
    console.log(index + ": " + value + " & " + array[index])             // Doesn't return an array
}

var num = [1,2,3,4,5,6]
var newNum

newNum = num.map(funky)
function funky(value, index, array) {
    newNum = index + ": " + value + " & " + array[index]                 // Does return an array
    return newNum
}

// Array Filters

var num = [1,3,4,5,8,9]
var even = num.filter(isEven)
function isEven(value, index, array) {
    return value % 2 == 0
}
