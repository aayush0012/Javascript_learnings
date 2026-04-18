/*
========================================
DOM - Creating & Placing Elements (JS)
========================================

1. Create Element
-----------------
const el = document.createElement("tagname");

// examples
const div = document.createElement("div");
const p   = document.createElement("p");


2. Select Existing Element
--------------------------
const parent = document.querySelector("div");
const target = document.querySelector("span");


3. Place Element
----------------

// (A) Append at end
parent.append(el);         // modern
parent.appendChild(el);    // old


// (B) Insert at specific position
target.insertAdjacentElement("position", el);

/*
positions:
"beforebegin" -> before target
"afterbegin"  -> inside (start)
"beforeend"   -> inside (end)
"afterend"    -> after target
*/


// (C) Shortcut methods (recommended)
target.before(el);   // before target
target.after(el);    // after target
target.prepend(el);  // inside (start)
target.append(el);   // inside (end)

/*
4. Basic Flow
-------------
const parent = document.querySelector("div");

const el = document.createElement("p");
el.textContent = "Hello";

parent.append(el);


5. Key Rules
------------
- createElement() -> creates in memory only
- must place using append / insert
- methods act on existing DOM element
- pass new element as argument


6. Common Mistakes
------------------
document.createElement("div1"); // invalid tag ❌
el.insertAdjacentElement(...);  // wrong (el not in DOM) ❌

*/