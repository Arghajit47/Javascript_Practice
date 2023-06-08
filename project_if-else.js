// A gift for Wife
var gift = prompt("Tell me what gift do you want to give?")

if (gift == "Roses" || gift == "Puppy") {
    console.log("Good choice! Go ahead and gift her " + gift)
}
else if (gift == "Jewelry" || gift == "Card" || gift == "Electronics") {
    console.log("Not bad but you can do better than that. Give her a rose or Puppy instead of " + gift)
}
else if (gift == "Money" || gift == "Candy" || gift == "Books") {
    console.log("Too Childish to give " + gift)
}
else {
    console.log("Try to think better. Why " + gift)
}