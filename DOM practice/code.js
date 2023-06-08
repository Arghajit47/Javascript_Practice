document.getElementById("heading").innerHTML = "This is a Heading";

document.getElementById("logo").alt = "bug"

var p = document.createElement("p")
var pText = document.createTextNode("New Paragraph")
p.appendChild(pText)

document.getElementById("main").appendChild(p)

// Changing the style

document.getElementById("heading").style.color= "blue";
document.getElementById("main").style.border="1px solid black"

