/*
==================== DOM CONTENT PROPERTIES ====================

1. innerHTML
--------------------------------------------------
- Gets or sets HTML inside an element
- Supports HTML tags
- Replaces entire inner content

Example:
element.innerHTML = "<b>Hello</b>";

Output:
Bold text is rendered

--------------------------------------------------

2. innerText
--------------------------------------------------
- Gets or sets ONLY visible text
- Ignores hidden elements (CSS: display:none)
- Does NOT interpret HTML tags

Example:
element.innerText = "<b>Hello</b>";

Output:
<b>Hello</b> (printed as text)

--------------------------------------------------

3. textContent
--------------------------------------------------
- Gets or sets ALL text (visible + hidden)
- Faster than innerText
- Does NOT interpret HTML

Example:
element.textContent = "<b>Hello</b>";

Output:
<b>Hello</b>

--------------------------------------------------

4. outerHTML
--------------------------------------------------
- Gets or replaces FULL element (including tag itself)

Example:
element.outerHTML = "<div>New</div>";

Effect:
Entire element is replaced

--------------------------------------------------

==================== KEY DIFFERENCES ====================

innerHTML   → HTML + replaces inside content
innerText   → visible text only
textContent → all text (visible + hidden)
outerHTML   → replaces whole element

--------------------------------------------------

==================== VIVA ONE-LINERS ====================

innerHTML   → "used to get/set HTML inside element"
innerText   → "returns only visible text"
textContent → "returns all text including hidden"
outerHTML   → "replaces entire element including tag"

========================================================
*/