//  Unit Testing
//  Testing against specific function.
//  Unit Test typically Automated.
//  Unit vs Integration testing.
//  Integration Testing is when we have multiple components working together.
//  Types of Tests: Actual vs Expected.
//  Actual is what the fuction retuns.
//  Expected is what we expect the function to return.

//  Functions for Unit Testing

function test(name, expected, actual) {
    if(expected === actual) {
        console.log(name + "\nTest Passed.")
    }
    else {
        console.log(name + "\nTest Failed.")
    }
}

function blah(num) {
    return num
}
test("Test if the number is the same as the output:", 2, blah(2))

// Testing the Add function

function test(name, expected, actual) {
    if(expected === actual) {
        console.log(name + "\nTest Passed.")
    }
    else {
        console.log(name + "\nTest Failed.")
    }
}

function add(num1, num2) {
    return (num1+num2)
}
test("Test if the excepted result is the same as the output:", 5, add(2, 2))
