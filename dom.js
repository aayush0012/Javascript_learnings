/*
==================== DOM BASICS ====================

DOM (Document Object Model)
- HTML page is converted into a JavaScript object
- This object is called "document"

window
- Global object in browser
- Everything (DOM, BOM, variables) comes under window

document
- Represents your HTML page
- Used to access and modify elements

BOM (Browser Object Model)
- Deals with browser features
- Example: history, location, navigator

==================== ACCESSING ELEMENTS ====================

1. By ID  (returns SINGLE element)
document.getElementById("id")

2. By Class (returns HTMLCollection)
document.getElementsByClassName("className")

3. By Tag Name (returns HTMLCollection)
document.getElementsByTagName("p")

==================== MODERN METHOD (IMPORTANT) ====================

querySelector (returns FIRST matching element)
document.querySelector("#id")
document.querySelector(".className")
document.querySelector("p")

querySelectorAll (returns NodeList of ALL matches)
document.querySelectorAll("p")

==================== IMPORTANT DIFFERENCE ====================

getElementById → single element
getElementsByClassName → collection (live)
getElementsByTagName → collection (live)

querySelector → first match
querySelectorAll → all matches (NodeList)

==================== BASIC USAGE ====================

const val = document.getElementById("hi");

console.log(val);           // full element
console.log(val.innerText); // text inside element

// change text
val.innerText = "New text";

====================================================
*/