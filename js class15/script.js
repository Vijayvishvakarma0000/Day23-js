/*

🔥 JavaScript Top 50 Interview Questions (Part 1 → Q1–Q10)
1. What is JavaScript?

JavaScript ek high-level, interpreted, single-threaded programming language hai jo web browsers me run hoti hai. Ye HTML aur CSS ke sath web development ki
 core technology hai. JavaScript ke through webpages me interactivity, DOM manipulation, event handling aur asynchronous programming possible hoti hai. 
 Modern JavaScript engines JIT compilation use karte hain for fast execution. Ye client-side aur server-side (Node.js) dono me use hoti hai.

2. What are variables in JavaScript?

A variable is a container that stores a value in memory, which can be accessed and modified later in the program. 
JavaScript me variables declare karne ke liye var, let, aur const keywords use hote hain. var function-scoped hota hai,
 let aur const block-scoped hote hain. const values ko reassign nahi karne deta. Variables hoist hote hain lekin let aur const 
 temporal dead zone me hote hain.

3. Explain the difference between null and undefined.

undefined ka matlab hota hai jab variable declare kiya gaya ho but usse koi value assign nahi hui. null ek intentional 
assignment hai jo batata hai ki variable ki value khali hai. typeof undefined "undefined" return karta hai, jabki typeof null "object" 
return karta hai (jo ek JS bug hai). Interviewers yeh difference puchkar candidate ki basics clarity check karte hain.

4. What is hoisting in JavaScript?

Hoisting JavaScript ka default behavior hai jisme variables aur function declarations compile phase me memory me "lift" kar diye 
jate hain. Is wajah se aap variables aur functions ko unke declaration se pehle bhi access kar sakte ho (but variables ke liye value 
undefined milegi agar var use kiya ho). let aur const hoist hote hain lekin Temporal Dead Zone me rahte hain jab tak declare nahi hote.

5. Difference between == and === in JavaScript.

== loose equality operator hai jo type coercion karta hai, yani agar types different hain to convert karke compare karega. === strict equality 
operator hai jo bina type conversion ke value aur type dono check karta hai. Example: 5 == "5" true hai, lekin 5 === "5" false hai. Interviewers 
ise puchkar candidate ki type conversion samajhne ki ability check karte hain.

6. What is the difference between function declaration and function expression?

Function declaration ek named function hota hai jo hoist hota hai, yani aap usse declare karne se pehle bhi call kar sakte ho. 
Function expression me function ko ek variable me assign kiya jata hai, aur ye hoist nahi hota. Example:

7. What are arrow functions?

Arrow functions ES6 me introduce hue, jo concise syntax provide karte hain functions banane ke liye. Ye => symbol use karte hain
 aur apna this context nahi banate, balki surrounding lexical scope ka this inherit karte hain. Example:

8. What is scope in JavaScript?

Scope ka matlab hai variable aur functions ki accessibility. JavaScript me 3 main scopes hote hain: Global Scope, Function Scope, 
aur Block Scope. var function scoped hota hai, jabki let aur const block scoped hote hain. Scope execution context ke saath directly 
linked hai, aur yahi decide karta hai ki kaunsa variable kaha accessible hai.

9. Explain closures in JavaScript.

Closure ek function hai jo apne lexical environment (outer function ke variables) ko access kar sakta hai, chahe outer function 
execute ho chuka ho. Example:

11. What is the difference between null and undefined in JavaScript?

Answer:

undefined ka matlab hai variable declare hua hai but usme value assign nahi hui.

null ek intentional empty value hai jo programmer assign karta hai.

typeof undefined → "undefined" hota hai.

typeof null → "object" hota hai (ye JS ka historical bug hai).

Example:


12. What is the difference between == and ===?

Answer:

== (loose equality) type coercion karta hai, yani values ko same type me convert karke compare karta hai.

=== (strict equality) bina conversion ke direct value aur type dono check karta hai.

Example:
*/