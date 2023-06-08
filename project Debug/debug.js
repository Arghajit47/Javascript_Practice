function btn1Clicked() {
    document.getElementById("p1").innerHTML = "Button 1 was clicked"        //Changed id from "p2" to "p1"
    alert("Button 1 was clicked")
}

function charsTyped() {
    var chars = document.getElementById("i1").value

    createString(chars)
}

function createString(someString) {
    document.getElementById("p2").innerText = "Characters typed: " + someString.length      //Added .length attribute
}

document.getElementById("b2").addEventListener("click", btn2Clicked)

function btn2Clicked() {
    var main = document.getElementById("mains")     // Added id="mains" in body tag of index.html
    var child = document.getElementById("p3")       //Changed id from "p5" to "p3"

    main.removeChild(child)
}

document.getElementById("i2").addEventListener("change", valueEntered)

function valueEntered() {
    var size = document.getElementById("i2").value.length

    document.getElementById("p4").style.fontSize = size + "em"          //modified from (size*2) to size
}