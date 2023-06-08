function btn1Pressed() {
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function txt1Typed() {
    let char1 = document.getElementById("i1").value
    document.getElementById("p2").innerHTML = "Characters typed " + char1.length
}

document.getElementById("b2").addEventListener('click', btn2Pressed)
function btn2Pressed() {
    document.getElementById("p3").innerHTML = ""
}

document.getElementById("i2").addEventListener('change', increase)
function increase() {
    let size = document.getElementById("i2").value.length

    document.getElementById("p4").style.fontSize = size + "em"
}