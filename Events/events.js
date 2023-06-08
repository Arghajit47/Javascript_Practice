// Events

function btnPressed() {
    console.log("Button 1 was pressed")
    document.getElementById('p1').innerHTML = "Button 1 pressed"
}
function txtTyped() {
    console.log("You typed something, Please continue")
    if(document.getElementById('i1').value == 123) {
        document.getElementById('p2').innerHTML = "Valid password!"

    }
    else {
        document.getElementById('p2').innerHTML = "Invalid password!"    
    }
}

// Event Listeners

document.getElementById("b2").addEventListener('click',btn2Pressed)
function btn2Pressed() {
    console.log("Button 2 was pressed")
    document.getElementById('p3').innerHTML = "Button 2 pressed"
}


document.getElementById("i2").addEventListener("change", txt2Typed)
function txt2Typed(){
    console.log("You typed something here")
    if(document.getElementById('i2').value == 123) {
        document.getElementById('p4').innerHTML = "Valid password!"

    }
    else {
        document.getElementById('p4').innerHTML = "Invalid password!"    
    }
}


document.getElementById("p4").addEventListener("mouseover", moused)
function moused() {
    document.getElementById("p4").innerHTML = "Wanna Click?"        
}
// Instead of using "document.getElementById("p4")" we can also use "this", It will use the same id in which the event has been called.