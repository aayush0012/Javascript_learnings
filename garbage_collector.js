/*
    GARBAGE COLLECTION (GC) in JavaScript

    Simple meaning:
    GC ka kaam hai memory clean karna.

    --------------------------------------------------

    Jab hum variables banate hain:
    
    let a = 10;
    let obj = {name: "Aayush"};

    👉 Yeh sab memory me store hote hain

    --------------------------------------------------

    Problem kya hai?

    Agar koi variable ab use nahi ho raha,
    aur fir bhi memory le raha hai → waste of memory

    👉 Yahi clean karne ka kaam GC karta hai

    --------------------------------------------------

    GC ka main rule:

    "Agar koi value reachable nahi hai → delete it"

    Reachable matlab:
    - Variable se access ho raha ho
    - Object ke through access ho raha ho

    --------------------------------------------------

    Example:

    let obj1 = {name: "Aayush"};
    let obj2 = obj1;

    obj1 = null;

    👉 Kya obj delete hoga?
    ❌ Nahi, kyunki obj2 still point kar raha hai

    --------------------------------------------------

    Another example:

    let obj = {name: "Aayush"};
    obj = null;

    👉 Ab koi reference nahi hai
    ✅ GC isko delete kar dega

    --------------------------------------------------

    Kaise kaam karta hai internally?

    Method: Mark and Sweep

    Step 1: Mark
    - Jo reachable hai unhe mark karo

    Step 2: Sweep
    - Jo mark nahi hua → delete from memory

    --------------------------------------------------

    Important points:

    - GC automatic hota hai (hume manually free nahi karna)
    - JS is memory managed language
    - We cannot directly control GC

    --------------------------------------------------

    Short summary:

    GC unused memory ko clean karta hai
    based on reachability
*/