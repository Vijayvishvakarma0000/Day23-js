
// ak promise ko pending kese kiya jaye interiew most imp question ????
//                                             Java script Notes Easy to learn 

// ........................................................................................................................................................


   //                                                       Document Object Model
   //                                            ++++++++++++++++++++++++++++++++++++++++++++++++

   /*
       definition :         DOM = Document Object Model ,  yah Ek programming interface hai jo browser provide karta hai.
                            Ye HTML document ko ek tree of nodes (objects) ke form me represent karta hai.

       DOM Selection Methods:

                           getElementById
                           
                           getElementsByClassName
                           
                           getElementsByTagName
                           
                           querySelector
                           
                           querySelectorAllDOM me kisi element ko target (select) karne ke liye alag-alag methods hote hain:

By ID → getElementById("idName")

By Class → getElementsByClassName("className") (HTMLCollection return karta hai)

By Tag → getElementsByTagName("tagName")

CSS Selector (single) → querySelector("selector") (first match return karta hai)

CSS Selector (multiple) → querySelectorAll("selector") (NodeList return karta hai)

      































   */

































//................................................................................................................................................................................
//                                                Call back function
//                                              _______________________
//   1️⃣ Callback kya hai?

// Definition:

// A callback is a function passed as an argument to another function and is executed after some operation is complete.

// Simple words me:

// Ek function ke andar doosra function bhejna.

// Ye mostly asynchronous operations me use hota hai, jahan hume task complete hone ke baad kuch karna hota hai.

// 2️⃣ Simple Real-Life Analogy

// Maan lo:

// Tum doctor ke paas ja rahe ho.

// Tum doctor ko kehte ho:

// "Doctor, checkup karlo aur mujhe call kar dena jab report ready ho."

// Yahan:

// Doctor → main function

// Call karne ka instruction → callback function

// Report ready hone ke baad callback execute hota hai

// Ye asynchronous flow me callback ka kaam hai.



                                            //  Code:
                            // function greet(name,p) {
                            //     console.log("Hello " + name);
                            //     p();
                            // }
                                                                                                                                                                                                                                                                           
                            // function sayGoodbye() {
                            //     console.log("Goodbye!");
                            // }
                            
                            // greet("Vijay",sayGoodbye);
                            
                            // Step 1: Compiler / JS engine starts execution
                            
                            // JS engine pure code ko parse karta hai.
                            
                            // Functions ko memory me store kar deta hai:
                            
                            // greet function memory me save ho gaya.
                            
                            // sayGoodbye function memory me save ho gaya.
                            
                            // Ab tak koi function execute nahi hua, sirf define hua hai.
                            
                            // Step 2: greet function call hota hai
                            // greet("Vijay", sayGoodbye);
                            
                            
                            // JS engine greet function ke line of call pe aata hai.
                            
                            // greet ke arguments me:
                            
                            // name = "Vijay"
                            
                            // callback = sayGoodbye (ye ek function reference hai, function ke naam ko argument me pass kiya)
                            
                            // Step 3: greet function body execute hota hai
                            // console.log("Hello " + name);
                            
                            
                            // JS engine "Hello Vijay" print karta hai.
                            
                            // Console output ab:
                            
                            // Hello Vijay
                            
                            // Step 4: callback function call hota hai
                            // callback();
                            
                            
                            // Yaha callback ke andar actually sayGoodbye function ka reference hai.
                            
                            // JS engine ab sayGoodbye() ko execute karta hai.
                            
                            // Step 5: sayGoodbye function execute hota hai
                            // console.log("Goodbye!");
                            
                            
                            // JS engine "Goodbye!" print karta hai.
                            
                            // Console output ab:
                            
                            // Hello Vijay
                            // Goodbye!
                            
                            // Step 6: Execution Complete
                            
                            // greet function ka execution complete hota hai.
                            
                            // JS engine next line (agar koi hai) execute karta hai.
                            
                            // Summary / Flow (step by step):
                            
                            // JS engine functions ko memory me store karta hai (definition phase).
                            
                            // greet("Vijay", sayGoodbye) call hota hai.
                            
                            // name aur callback arguments ko assign karta hai.
                            
                            // console.log("Hello " + name) → print Hello Vijay
                            
                            // callback() → ye sayGoodbye() ko call karta hai
                            
                            // console.log("Goodbye!") → print Goodbye!
                            
                            // Function execution finish


                                         // Real life Example of Callback

    

//     Real-Life Analogy: Doctor Appointment
// Scenario:

// Tum doctor ke paas ja rahe ho.

// Tum doctor se kehte ho:

// “Doctor, checkup karlo aur mujhe call kar dena jab report ready ho.”

// Mapping with JS:
// Real Life	JavaScript
// Tum	Main program / caller
// Doctor	Function jo kaam karta hai
// Call after report ready	Callback function
// Report ready hone ka wait	Asynchronous execution
// Step-by-Step:

// Tum doctor ko kaam ke liye bhejte ho → JS me function call hota hai.

// Tum instruction dete ho ki kaam complete hone ke baad call kar dena → JS me callback function pass karte ho.

// Doctor apna kaam karta hai (time lag sakta hai) → JS me asynchronous operation (API call, setTimeout).

// Kaam complete hote hi doctor tumhe call karta hai → JS me callback execute hota hai.

// Tum report receive karke decide karte ho next step → JS me callback ke andar code execute hota hai.

// JS Example for this analogy:
// function doctorCheckup(patientName, callback) {
//     console.log(`Doctor starts checkup for ${patientName}`);
    
//     setTimeout(() => { // simulate delay for report
//         console.log(`Report ready for ${patientName}`);
//         callback(); // call after report is ready
//     }, 2000);
// }

// function callPatient() {
//     console.log("Doctor calls patient: Your report is ready!");
// }

// doctorCheckup("Vijay", callPatient);


// Output:

// Doctor starts checkup for Vijay
// Report ready for Vijay
// Doctor calls patient: Your report is ready!


// Explanation:

// doctorCheckup → main function

// callPatient → callback function

// Callback tab run hota hai jab checkup (asynchronous task) complete hota hai

//  Key Point:

// Callback ensures ki task complete hone ke baad hi dusra kaam execute ho.

// Agar callback na ho → result tab tak nahi milega ya hum wrong order me kaam karenge
// ................................................................................................................................................................................

//                                                    +++++++++++++++++++++++++++++++++++++++++++
/*                                                    |               callback Heal             |    
                                                    +++++++++++++++++++++++++++++++++++++++++++
  

  🔹 Callback Hell Kya Hai?

Definition (interview style):
                             Callback Hell ek situation hai jisme multiple asynchronous tasks ko manage karne ke liye callback functions ko ek ke andar ek nest kar diya 
                             jata hai. Isse code difficult to read, debug aur maintain ho jata hai.


                             JavaScript asynchronous kaam (jaise API call, DB query, setTimeout) turant complete nahi kar pata.
                             Toh JS bolta hai:

                             "Main tumhe ek function dedo, main kaam khatam kar ke us function ko call kar dunga."

                          👉 Ye function jo baad me call hota hai usse callback bolte hain.


                          Example:


                            setTimeout(() => {
                            console.log("Hello after 2 sec");
                            }, 2000);

                            Yaha () => { console.log("Hello...") } ek callback hai.


  🔹 Step 2: Jab multiple async kaam hote hain

                            DB connect karo

                            User fetch karo
                            
                            Orders fetch karo
                            
                            Bill generate karo
                            
                            Agar hum normal callback use karenge toh code kuch aisa banega:

                            connectDB(() => {
                              console.log("DB Connected");
                              fetchUser((user) => {
                                console.log("User Fetched:", user);
                                fetchOrders(user, (orders) => {
                                  console.log("Orders Fetched:", orders);
                                  generateBill(orders, (bill) => {
                                    console.log("Bill Generated:", bill);
                                  });
                                });
                              });
                            });


                            👉 Har async task ke andar ek aur async task.
                            👉 Ye code nested ho kar pyramid ban gaya.


  🔹 Step 3: Callback Hell ka Problem

                            Readability khatam – code samajhna mushkil ho gaya.
                            
                            Maintainability issue – agar beech me ek aur step add karna ho toh pura structure todna padta hai.
                            
                            Error handling mess – har jagah if(error) likhna padta hai.
                            
                            Pyramid of Doom – nested functions ek bade pyramid jaisa dikhte hain.


🔹 Step 4: Real Life Analogy

                           Socho tumne ek dost ko chai banane bola:
                           
                           Paani garam karo → uske baad
                           
                           Chai patti dalo → uske baad
                           
                           Doodh dalo → uske baad
                           
                           Chini dalo
                           
                           Agar tum har step ke liye ek aur friend ko call kar rahe ho jo baad me dusre ko bulata hai, toh chain lambi ho jaayegi → aur confuse bhi ho jaoge.
                           
                           Yahi JavaScript me hota hai Callback Hell ke saath.




*/

 //       Event loop ko samjhne ke pahle hame Synchronous or Asynchronous programing ke bare me pata hona chahiye ye kya hoti he or kya kam karti he ?
 
 //                                                        [      Synchronous Programing    ]
 /*                                                         ______________________________

                                        👉 Matlab: Code line by line, order me execute hoga.
                                        Ek line complete hone ke baad hi agli line chalegi.
                                        Agar koi line zyada time le rahi hai (e.g. heavy calculation, file read), to poora program block ho jayega.
                                     (1)Single-threaded:
                                        # JavaScript ke paas ek hi call stack hota hai. Isliye ek time par ek hi kaam karta hai.
                                    
                                     (2) Call Stack ka role:

                                         #Jab bhi koi function call hota hai → wo call stack me push hota hai.
                                         #
                                         #Jab function complete hota hai → wo call stack se pop ho jata hai.
                                         #
                                         #Jab tak ek function stack me hai tab tak next function execute nahi hoga.

                                    (3)  Agar ek function zyada time leta hai (jaise heavy calculation ya infinite loop), to poora program ruk jata hai.
                                         Isliye synchronous ko blocking execution bhi bolte hain.


                                        Example

                                        console.log("A");
                                        console.log("B");
                                        console.log("C");

                                        Call Stack:
                                       ┌───────────────┐
                                       │ console.log("C") │   ← 3rd line run hogi last
                                       │ console.log("B") │   ← 2nd line run hogi second
                                       │ console.log("A") │   ← 1st line run hogi pehle
                                       └───────────────┘

                                        Output:
                                        A
                                        B
                                        C

                                        Note: Har line previous line ke khatam hone ka wait karti hai → isliye isse blocking code kehte hain.
 
 */
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*                                              [   ASYNCHRONOUS PROGRAMMING  ]      
                                      ++++++++++++++++++++++++++++++++++++++++++++++++++


Definition for Interview

👉 “Asynchronous JavaScript is a programming model where tasks can run in the background without blocking the main thread, allowing the code execution to continue while waiting for operations like API calls, file reading, or timers to complete.”

Use case examples

API Calls – Server se data lana (fetch / AJAX).

Timers – setTimeout, setInterval.

File Reading – User ke system se file read karna.

Events – User input ke response me background me kaam karna.

🔑 Simple words me:
Asynchronous = ek hi time par multiple kaam handle karna without waiting.


*/














  
/*                                                               Event Loop javascript                                      
                                                            _______________________________


1️⃣ Event Loop kya hai?

Definition:

JavaScript ek single-threaded language hai, matlab ek time me sirf ek kaam kar sakti hai.
Event Loop JS engine ka mechanism hai jo asynchronous tasks ko handle karta hai aur callback functions ko proper order me execute karta hai.

=>  hamne yaha par event loop ki definition ko dekha ab ham dekhte he ki jo Event loop hota he uske kuchh components hote he unhi components ki help se 
    event loop apni puri process karta he .
=>  Event Loop ke main Components
:....................................................
:    (1): callstack                                 :
:    (2): WebApis                                   :
:    (3): callback Queue(task/ Macrotask Queue)     :============>[EVENT LOOP]
:    (4): priority Queue (microtask Queue)          :
.....................................................


                     ...............................................
                     |   console.log("start")                      | 
                     |   setTimeout(()=>{                          |           
                     |          console.log("good Evening")        |                            
                     |       },2000);                              |     
                     |   console.log("End")                        |          
        ----------------------------------------------------------------------------

                                                     +-------------------+
                                                     |   JS Code Start   |   dekho yaha par kya process ho rahi he upper vale box me sabse pahle clg chala or fir clg stack me gaya or vaha par usne ak box create kiya memory me 
                                                     +-------------------+   fir compiler dusri line par gaya jo settime out callstack me gaya jarur he par vo callstack ne webApis ko transffer kar diya 
                                                              |
                                                              v
                                                     +-------------------+
                                                     |   Call Stack      | <--- (Functions execute yaha hoti hain)
                                                     +-------------------+
                                                              |
                                                              | (Agar sync code hai -> turant execute)
                                                              | (Agar async code hai -> callback bhej diya jata hai)
                                                              v
                                                     +-------------------+
                                                     | Web APIs / Timer  | <--- (setTimeout, fetch, DOM events etc.)
                                                     +-------------------+
                                                              |
                                                              v
                                                     +-------------------+
                                                     | Callback Queue    | <--- (Async callbacks line me wait karte hain)
                                                     +-------------------+
                                                              |
                                                     [ Event Loop Check karta hai: 
                                                       "Kya Call Stack empty hai?" ]
                                                              |
                                                              v
                                                     +-------------------+
                                                     |   Move callback   | ---> Callback ko Stack me bhejta hai
                                                     +-------------------+
                                                              |
                                                              v
                                                     +-------------------+
                                                     |   Execute Code    |
                                                     +-------------------+
                                                              |
                                                              v
                                                     (Repeat same cycle...)





                                        ______________________________________
                                        |      Working of event loop         |
                                        | ___________________________________|_

        JavaScript single-threaded language hai, iska matlab ek time pe ek hi kaam execute karta hai. Jab bhi code run hota hai, 
        sabse pehle global execution context create hota hai  aur sab code call stack me jata hai. Call stack ek LIFO
         (Last In First Out) stack hai jisme synchronous code line-by-line execute hota hai. Agar koi asynchronous task aata hai
         (jaise setTimeout, Promise, fetch, XHR request), to vo call stack ko block nahi karta. Ye task browser ke Web APIs ko de 
         diya jata hai (ye browser ke alag system hote hain jo asynchronous kaam handle karte hain). Jab async task complete ho 
         jata hai, uska callback ya promise result callback queue ya microtask queue me bheja jata hai. Ab event loop continuously
         check karta hai ki call stack empty hai ya nahi. Agar stack empty hai, to event loop queue se callback uthakar stack me 
         dal deta hai aur phir vo execute hota hai. Is tarah synchronous aur asynchronous code ka execution smoothly manage hota 
         hai bina blocking ke.

        👉 Simple socho:
        
        Stack = turant kaam execute karne ki jagah.
        
        Web APIs = background helper.
        
        Queue = line me wait karte callbacks.
        
        Event loop = guard jo check karta hai stack khali hai to queue ka kaam bhejo.
                                                  

==============================================================================================================================================================================
 */                                                  
/*                                                            CURRING
                                                   ++++++++++++++++++++++++++++++        
                                                     
  Definition of Curring:=>
    
                             👉 Definition:
                                 Currying is a functional programming technique where a function that takes multiple arguments is transformed 
                                 into a sequence of functions, each taking a single argument.

                             curring is a simpler function , jab multiple parameter lene vale function ko chhote - chhote parts me divided karte he or function single 
                             parameterr ke sath function return karta ho tab ise curring  kahete he,curring ke andar  jo outre function hoga vo hamesha named function hota he 
                             or inner function annonymous function hota he is concept ko hi curring kahte he .

                             Har function sirf ek argument accept karta hai aur next function return karta hai.



                                            🔹 Example without currying:

                                               function add(a, b, c) {
                                               return a + b + c;
                                                                  }

                                               console.log(add(2, 3, 4)); // 9

                                            🔹 Example with currying:

                                              function add(a) {
                                                 return function(b) {
                                                   return function(c) {
                                                     return a + b + c;
                                                   };
                                                 };
                                               }
                                               
                                               console.log(add(2)(3)(4)); // 9


                ✅ Conclusion:
                    Currying isliye aaya kyunki hume ek aisa tarika chahiye tha jaha functions ko tod kar chhote chhote pieces me use kar sakein, 
                    reuse kar sakein, aur specific situations ke liye customize kar sakein. Ye mainly functional programming ka powerful concept hai 
                    jo real projects me readability aur reusability ko improve karta hai.
                                               

=============================================================================================================================================================*/  

/*                                                                 XHR- (XMLHttpRequest)
                                                             ++++++++++++++++++++++++++++++
                                                            

Definition:=>
           
            👉 XMLHttpRequest (XHR) ek built-in JavaScript object hai iska kam hota he client (browser) aur server ke beech asynchronous data transfer ke liye hota he 
             wothout web page reload kiye 
             iska main kam he :
             (1)Server se data fetch karna bina page ko reload kare.
             (2)Server ko data bhejna bina reload ke.
             (3) Dynamic content load karna

 XHR Ka Working Flow ==>

    XHR Workflow (Kaise kaam karta hai)

         Ek XMLHttpRequest object create karo.
         
         Request type set karo (GET ya POST).
         
         Server ka URL define karo.
         
         Request send karo.
         
         Jab response ready ho, tab callback function run ho jata hai.

                 Syntax:
                 
                 Step 1: Object create
                 let xhr = new XMLHttpRequest();
                 
                 Step 2: Request configure
                 xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
                 
                 Step 3: Response handle
                 xhr.onreadystatechange = function () {
                   if (xhr.readyState === 4 && xhr.status === 200) {
                     console.log("Response:", xhr.responseText);
                   }
                 };
                 
                 // Step 4: Send request
                 xhr.send();
XHR Methods :
              # iski mainly two methods he 
              (1) open method:xhr.open()
                  Ye request ko initialize karta hai (setup karta hai) ki server se connection kaise banega.
                  Ye request ko prepare (initialize) karta hai, but abhi server pe bhejta nahi.
                  syntax:
                  xhr.open(method, url, async, user, password);
                  xhr.open(method, url, async);  // ham ye simple method ka use bhi kar sakt ehe 

              Parameters:

                  method → "GET" ya "POST" (ya aur bhi HTTP methods jaise PUT, DELETE).
                  
                  url → server ka path jaha request bhejna hai.
                  
                  async (default = true) → request asynchronous hogi ya nahi.
                  
                  true → async (page block nahi hoga).
                  
                  false → sync (page execution ruk jayega jab tak response na aajaye).
                  
                  user & password → agar server authentication maangta hai.


Limitation of XHR==>

                 Callback hell (zyada nested ho jata tha).
                 
                 Error handling tough tha.
                 
                 Code readable nahi lagta tha.

✅ Conclusion:
                 XMLHttpRequest ek purana but powerful tool hai jo asynchronous communication possible banata hai browser aur server ke beech. 
                 Yehi base tha AJAX aur modern APIs (Fetch, Axios) ka

*/
//=============================================================================================================================================================
/*                                                        CALLBACK
                                               ++++++++++++++++++++++++++++++++++

















*/
































/*                                                        [         PROMISE         ]
                                                     ++++++++++++++++++++++++++++++++++++++ 
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                                              
                                                     
    👉 “JavaScript me Promise ek object hai jo future me complete hone ya fail hone wali asynchronous operation ko represent karta hai. 
        Ye callbacks ka cleaner alternative hai jisme hum success ke liye .then() aur failure ke liye .catch() use karte hain. Promise
        teen states me ho sakta hai: pending, fulfilled ya rejected, aur ek baar settle ho jane ke baad iska state immutable hota hai.”                                                 

    Definition Of Promise:=>

        "Promise ek object hai jo asynchronous operation ke result ko represent karta hai or ye promise karta he ki future
         ke particular time par kuchh na kuchh return karunga , aur iske  3 states hote hain: pending, fulfilled,
         rejected. Ye callback hell ko avoid karne ke liye introduce hua tha."
         resolve method ke ouput ko store karne k liye then  method ka use kiya jata he
         or reject ke output ko store karne ke liye catch method ka use kiya jata he 


            States of a Promise:

              Pending → Operation chal rahi hai, result abhi available nahi.
              
              Fulfilled (Resolved) → Operation successfully complete ho gayi.
              
              Rejected → Operation fail ho gayi (error aaya)
-------------------------------------------------------------------------------------------

  🔹 1. then()

👉 Kaam: Promise fulfill (resolve) hone par run hota hai.

Iske andar tumhe resolved value milti hai.

Ye ek new promise return karta hai, isliye chaining possible hoti hai.

let promise = Promise.resolve("Step 1 Done");

promise.then(res => {
  console.log(res); // Step 1 Done
  return "Step 2";
}).then(res => {
  console.log(res); // Step 2
  return "Step 3";
}).then(res => {
  console.log(res); // Step 3
});


🔹 2. catch()

👉 Kaam: Agar promise reject ho gaya ya koi error aayi, to ye usko pakadta hai.

Error handle karne ke liye use hota hai (like try–catch in async world).

let promise = Promise.reject("Something went wrong!");

promise.then(res => {
  console.log("This will not run");
}).catch(err => {
  console.log("Caught:", err); // Caught: Something went wrong!
});

⚡ Key Point:

Agar upar ke chain me kahi bhi error hui, to .catch() usko handle kar lega.

.catch() chain me kahin bhi laga sakte ho.

🔹 3. finally()

👉 Kaam: Ye hamesha execute hota hai, chahe promise resolve ho ya reject.

Mostly cleanup tasks ke liye use hota hai (jaise loading spinner hata dena, connection close karna).

let promise = new Promise((resolve, reject) => {
  let success = false;
  success ? resolve("Data loaded") : reject("Network error");
});

promise
  .then(res => console.log("Success:", res))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Operation finished (cleanup)"));

  ⚡ Key Point:

finally() ko result ya error nahi milta, ye sirf ek signal hai ki promise settle ho chuka hai.

----------------------------------------------------------------------------------------------------------------

// chalo ham promises ko explain karte he behind the scene kya process ho rahi he usko samjhte he iska flow samjhte he kese kam kar raha he js engine or compiler 
--------------------------------------------------------------------------------------|
|                                                                                     |
|               const myPromise = new Promise((resolve, reject) => {                  |
|                 let dataLoaded = true;                                              |
|                                                                                     |
|                 if (dataLoaded) {                                                   |
|                    resolve("✅ Data successfully loaded!");                        |                         
|                 } else {                                                            |
|                  reject(" Failed to load data!");                                   |==============> Example for promise
|               }                                                                     |
|            });                                                                      |
|                                                                                     |
|             myPromise                                                               |
|             .then((result) => console.log(result))                                  |
|            .catch((error) => console.log(error));                                   |
|                                                                                     |                 
|                                                                                     |
----------------------------------------------------------------------------------------


CODE EXECUTION :

              (1)Memory Creation Phase (Compilation Stage)
              
              JS engine myPromise ko memory me jagah deta hai (undefined se initialize karta hai).
              
              Functions resolve, reject, aur .then methods already Promise prototype me defined hote hain.


             (2)Execution Phase (Code Line by Line Run)
             
             Line const myPromise = new Promise(...) execute hota hai.
             
             new Promise(...) constructor chal jata hai → ye ek executor function run karta hai jisme resolve aur reject callback ke रूप me JS engine inject karta hai.


            (3) Executor Function Run

            Code ke andar let dataLoaded = true; run hota hai.
            
            if (dataLoaded) true hai → resolve("✅ Data successfully loaded!") call hota hai.
                  
            ⚡ Important: resolve call hote hi value Promise object ke internal state me set ho jaati hai:

               State: "pending" → "fulfilled"
               
               Value: "✅ Data successfully loaded!"

               (4).then() Call

               Jab JS myPromise.then(...) pe aata hai → tab engine kehta hai:
               “Ok, promise already fulfilled ho chuka hai, jo callback pass hua hai usko Microtask Queue me daal do.”

              (5) Event Loop Magic

               Call stack empty hone ke baad Event Loop microtask queue check karega.
               
               .then ka callback uthake run karega.


               Console Output

              "✅ Data successfully loaded!" print hota hai.



              -------------------------------------------------------------------------------------------------------
                              ye promise ka second example he jisme hamne setTime ka use kiya he 


             const asyncPromise = new Promise((resolve, reject) => {
              console.log("⏳ Loading data...");
              setTimeout(() => {
                let success = true;
            
                if (success) {
                  resolve("✅ Data fetched after 2 seconds!");
                } else {
                  reject("❌ Error while fetching data!");
                }
              }, 2000);
            });

            asyncPromise
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
         ---------------------------------------------------------------------------------------------------------------------
                 ye third example he  jisme ham ak  bad ak then ka use karke dekh rahe he mtlb ak chainig ka use kar rahe he 



                 const chainPromise = new Promise((resolve) => {
                   setTimeout(() => {
                     resolve(10);
                   }, 1000);
                 });
                 
                 chainPromise
                   .then((num) => {
                     console.log("Step 1:", num);
                     return num * 2; // return next step ke liye
                   })
                   .then((num) => {
                     console.log("Step 2:", num);
                     return num + 5;
                   })
                   .then((num) => {
                     console.log("Step 3:", num);
                   });
                 
        -------------------------------------------------------------------------------------------------------------------------      
         

          


        example 2:


                 let promise = new Promise((resolve, reject) => {
                  let success = true;
                
                    if(success){
                        resolve("This message is successful");
                    } else {
                        reject("Error failed");
                    }
                });
                
                // consume karne ke liye
                promise
                  .then((message) => {
                      console.log("Resolved:", message);
                  })
                  .catch((error) => {
                      console.log("Rejected:", error);
                  });

 👉 Yaha kya ho raha hai:

    new Promise banate time tum do function dete ho → resolve aur reject.
    
    Agar condition true hai → resolve call hota hai, aur .then() me value aati hai.
    
    Agar condition false hai → reject call hota hai, aur .catch() me value aati hai.


        Use Cases of Promises:

        API calls (fetching data from server)
        
        File handling (reading/writing files asynchronously)
        
        Database queries
        
        Timers/Delays

// ye example he jo sir ne karvaya tha 


                     // const promise = new Promise ((resolve,reject)=>{
                    //        let age=Math.floor(Math.random(0,10)*100)
                    //         if(age){
                    //             resolve('allowed for vote')
                    //         }
                    //         else{
                    //             reject('not allowed ')
                    //         }
                    
                    // })
                    // promise.then((op)=>(console.log(op)))
                    // .catch((e)=>console.log(e));
                    
                    
                    // function message (){
                    //     for(let i=0; i<=5; i++){
                    //         console.log('Sita ram')
                    //     }
                    // }
                    // setTimeout(message,1000);







          pROMISE STATIC METHODS  ====>
          ----------------------
🔹 Promise me Static Methods

👉 Interview me bolne layak line:
“Promise ke static methods hume advanced async patterns solve karne ke liye diye gaye hain, jaise all ke through parallel execution, 
allSettled ke through full report, race ke through fastest response, aur any ke through first success. Ye methods asynchronous programming 
ko predictable aur efficient banate hain.”

Definition:
👉 Static methods wo hote hain jo directly class pe call kiye jaate hain, na ki uske instance pe.
Jaise Array.isArray(), Math.random() etc.
Waise hi, Promise class me kuch static methods hote hain jo alag–alag async scenarios ko handle karne ke liye banaye gaye hain.


🔹 1. Promise.resolve(value)

✅ Ye ek already resolved promise return karta hai. Matlab bina async ke bhi tumhe ek promise object mil jata hai.

👉 Use case: Jab tumhe ek normal value ko bhi promise ki tarah treat karna ho.

     let p = Promise.resolve(42);
     p.then(res => console.log(res));  
     // Output: 42


🔹 2. Promise.reject(reason)

✅ Ye ek already rejected promise return karta hai.

👉 Use case: Testing ke liye ya manually error force karne ke liye.
                    
let p = Promise.reject("Something went wrong!");
p.catch(err => console.log(err));  
// Output: Something went wrong!
🔹 3. Promise.all(iterable)

✅ Ye ek saath multiple promises parallel chalata hai.

Agar sab promises resolve ho gaye → ek array of results return hota hai.

Agar ek bhi promise fail hua → pura reject ho jata hai.

👉 Use case: Jab tumhe multiple APIs call karni ho aur tabhi kaam complete karna ho jab sabka result aa jaye.

let p1 = Promise.resolve("User Data");
let p2 = Promise.resolve("Posts Data");

Promise.all([p1, p2])
  .then(res => console.log(res)) 
  .catch(err => console.log("Error:", err));

// Output: ["User Data", "Posts Data"]

🔹 4. Promise.allSettled(iterable)

✅ Ye sab promises ka result deta hai (chahe success ho ya fail).

Har ek ka status: "fulfilled" ya "rejected" ke saath aata hai.

👉 Use case: Jab tumhe sabka final status chahiye, bina fail hone par break kiye.

let p1 = Promise.resolve("Success");
let p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2])
  .then(res => console.log(res));

// Output:
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Failed" }
// ]


🔹 5. Promise.race(iterable)

✅ Ye sabse pehle complete hone wale promise ka result deta hai (success ya fail, dono me se jo pehle ho).

👉 Use case: Jab tum multiple servers se ek hi data fetch kar rahe ho, aur tumhe fastest response chahiye.

let p1 = new Promise(res => setTimeout(() => res("Server 1"), 2000));
let p2 = new Promise(res => setTimeout(() => res("Server 2"), 1000));

Promise.race([p1, p2])
  .then(res => console.log("Fastest:", res));

// Output: Fastest: Server 2


🔹 6. Promise.any(iterable)

✅ Ye sabse pehle resolve hone wale promise ka result deta hai.

Agar sab reject ho jaye, tab ek AggregateError throw karta hai.

👉 Use case: Jab multiple tasks try kar rahe ho aur tumhe kisi bhi ek success ka result chahiye.

let p1 = Promise.reject("Fail 1");
let p2 = new Promise(res => setTimeout(() => res("Success!"), 1000));
let p3 = Promise.reject("Fail 2");

Promise.any([p1, p2, p3])
  .then(res => console.log("First Success:", res))
  .catch(err => console.log(err));

// Output: First Success: Success!

              
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/                                                   
                                
/*                                                          PROMISE CHAINING
                                                 +++++++++++++++++++++++++++++++++++

🔹 Promise Chaining kya hota hai?

Promise chaining ka matlab hai ek promise ke result ko lekar agle promise me pass karna. Isme hum multiple asynchronous operations ko ek 
sequence (chain) me likh pate hai, bina callback hell ke.


🔹 Flow samajh lo

Ek promise return hoga ✅

Uske baad .then() chalega aur agar usme return diya gaya hai to wo bhi ek promise ban jayega.

Fir agla .then() us promise ka result lega.

Agar kahin error hua to .catch() me chala jayega.

Aur finally me jo likha h wo hamesha chalega.


ISKO HAM AK EXAMPLE KI HELP SE SAMAJHTE HE ==>

                                                 new Promise((resolve, reject) => {
                                                 resolve("Step 1: Data fetched");
                                               })
                                               .then(result1 => {
                                                 console.log(result1); 
                                                 return "Step 2: Processing data";  // next .then() me jayega
                                               })
                                               .then(result2 => {
                                                 console.log(result2); 
                                                 return "Step 3: Saving data"; 
                                               })
                                               .then(result3 => {
                                                 console.log(result3); 
                                                 return "Step 4: Done"; 
                                               })
                                               .catch(error => {
                                                 console.log("Error:", error); 
                                               })
                                               .finally(() => {
                                                 console.log("Process Completed"); 
                                               });
                                               



  🔹 Dry Run / Flow:

new Promise() run hua → resolve("Step 1: Data fetched")

Pehla .then() chal gaya → result1 = "Step 1: Data fetched"

Print: ✅ Step 1: Data fetched

Return: "Step 2: Processing data" → agle .then() ko mila

Dusra .then() chal gaya → Print: ✅ Step 2: Processing data

Return: "Step 3: Saving data"

Teesra .then() chal gaya → Print: ✅ Step 3: Saving data

Return: "Step 4: Done"

Aur fir last .then() → Print: ✅ Step 4: Done

Agar kahi bhi error hota → sidha .catch() chal jata

Aur sab ke end me .finally() always chalega

🔹 Output:


Step 1: Data fetched
Step 2: Processing data
Step 3: Saving data
Step 4: Done
Process Completed

👉 Matlab Promise Chaining se hum ek sequence bana lete hai asynchronous ka, aur har ek result agle wale me smoothly pass hota hai.




*/

/*                                                       ASYNC && AWAIT
                                             ++++++++++++++++++++++++++++++++++++      
                                             
Formal Definition
-------------------------------------------------------------------------------------------------------------------------------------------------------
async aur await JavaScript ke keywords hain jo asynchronous code likhne ko easy aur readable banate hain.
Async/Await Promises ke upar banaya gaya syntactic sugar hai (matlab andar hi andar Promises use hote hain, bas likhne ka tarika simple ho jata hai).


1️⃣ Async Function kya hai?

async keyword function ke aage lagate hain.

Ye function hamesha promise return karta hai, chahe tumne explicitly na diya ho.

Example:    


async function greet() {
    return "Hello";
}

console.log(greet()); 
// Output: Promise { "Hello" }

// yaha par hamne .then lagakar dekha or message me hamko hello print mila or hamne uper async lagaya tha to hame promise hello mila isse ye clear 
// ho gaya ki async hamesha promise ke andar hi value return karta he  
greet().then((msg) => console.log(msg));
// Output: Hello

2️⃣ Await kya hai?

await keyword sirf async function ke andar use hota hai.

Ye promise ka result wait karta hai aur uske complete hone ke baad hi next line execute karta hai.


function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve("Done waiting"), ms));
}

async function process() {
    const result = await wait(2000); // 2 second rukega
    console.log(result);
}

process();
// 2 second baad output: Done waiting

Matlab: await ke saath code synchronous jaisa lagta hai, par internally async hi hota hai.
        ----------------------------------------------------------------------------------------------------------------------------



3️⃣ Error Handling

Async/Await me try...catch use karke errors handle karte hain:

async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();


Agar API fail ho jaye, catch me error aayega.


4️⃣ Multiple Await

Multiple promises sequentially handle karne ke liye:

async function processTasks() {
    const task1 = await new Promise(res => setTimeout(() => res("Task 1 done"), 1000));
    console.log(task1);

    const task2 = await new Promise(res => setTimeout(() => res("Task 2 done"), 1000));
    console.log(task2);
}

processTasks();
// 1 second baad Task 1, fir 1 second baad Task 2



                                                   Real example of asyn and await 
                                                   --------------------------------
                                                   Real-world Use

Async/Await → Most Preferred (adhiktar use hota hai)

Kyunki ye clean, readable aur maintainable code deta hai.

Error handling simple try...catch se ho jati hai.

Zyada tar modern projects (React, Node.js, Express, Next.js, etc.) me ye use hota hai.

Example (React me API call):


useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch("https://api.example.com/data");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  fetchData();
}, []);


*/
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*                                                          FETCH 
                                                 +++++++++++++++++++++++++++

🔹 Fetch API kya hai?

Fetch ak  built-in JavaScript function hai jo server se data mangane (GET) ya server pe data bhejne (POST/PUT/DELETE) ke liye use hota hai.

Ye asynchronous hota hai aur hamesha ek Promise return karta hai.

🔹 Fetch kaise kaam karta hai? (Flow)

Tum fetch("url") call karte ho.

Ye ek HTTP request send karta hai (GET by default).

Ye ek Promise return karta hai jo ek Response object deta hai.

Response ko use karne ke liye tumhe .json(), .text(), etc. me convert karna padta hai (kyunki by default wo raw hota hai).


🔹 Basic Example:

  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())   // response ko JSON me convert
  .then(data => console.log(data))     // data print karo
  .catch(error => console.log("Error:", error));

  🔹 Async/Await ke saath Fetch

Ye zyada clean aur readable hai:

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();


🔹 Fetch with POST (data bhejna)


async function sendData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My Post",
        body: "Hello World!",
        userId: 1
      })
    });

    let data = await response.json();
    console.log("Saved:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

sendData();

🔹 Khaasiyat (Why Fetch is useful?)

Built-in hai → extra library ki need nahi.

Promises ke upar based hai → Async/Await ke saath clean code.

GET, POST, PUT, DELETE sab support karta hai.

Web + Backend (Node.js with node-fetch) dono me use hota hai.

*/
//#######################################################################################################################################################


/*                                                                 Variables
                                                          ++++++++++++++++++++++++++

variables is a  container  which holds value   ye primitive or non-primitive value ko store karte he 


*/
