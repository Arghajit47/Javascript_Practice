// VAR

var a = 10
	function f(){
		console.log(a)
	}
f();
console.log(a);


//LET


function f() {

    // It can be accessible any
	// where within this function

    var a = 10;
	console.log(a)
}
f();

// A cannot be accessible
// outside of function

console.log(a);


// CONST


const greeting = "say Hi";
greeting = "say Hello instead";     // error: Assignment to constant variable. 
