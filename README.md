# front-end-interview-questions

## 1. farmework vs library?

    -a library provides set of functions / objects / modules which your app code calls
    for specific functionality  ex:jquery & react

    -framework is an abstraction in which software providing a generic functionality can be selectively changed by addational user-written code this providoing app-specific software.

## **JS QUESTIONS**

## 1. Shallow vs Deep copy?

    2-Deep copy techniques depend on the three array types?
    -A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.

    -A shallow copy means that certain (sub-)values are still connected to the original variable.

    splice,slice,concat	     json(parse,stringify)	$.extend,_.extend,_.cloneDeep

    bool,num,
    strings:         deep           deep			deep
    literal
    (arrays,objects):shallow		deep			deep
    protype obj:     shallow		shallow		    deep

    From these elements we can create three types of arrays.

    // 1) Array of literal-values (boolean, number, string)
    const type1 = [true, 1, "true"];

    // 2) Array of literal-structures (array, object)
    const type2 = [[], {}];

    // 3) Array of prototype-objects (function)
    const type3 = [function () {}, function () {}];

## 2. What is the spread operator vs Object.assign in JavaScript?

    -The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.

    The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.

    -Object.assign is in the official released and will also create a shallow copy of the object.

## 3. what is coffescript?

    -coffescript is lightweight programming language based on ruby & paython which complies into js.

## 4. what is callback function?

    -callback is a function passed into anthor function as an argument to be executed later.

## 5. what is promises?

    -is an object return value that you hope to receive in the future.
    -object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    -Usually done by callbacks that are only used when doing I/O, e.g. downloading things, reading files, talking to databases

## 6. Describe what is the difference between Null and Undefined?

    Null is an object with no value.
    Undefined is a type.

    typeof null; // “object”
    typeof undefined; // “undefined”

## 7. Explain the difference between cookies, session storage, and local storage?

    Cookies allow applications to store data in a client’s browser.
    Session storage property allows applications to store data until the window is closed.
    Local storage property lets applications to store data without an end.

## 8. what is Event Delegation?

    -Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the . target property of the event object.

## 9. How can you increase page performance?

    I can increase the page performance by the following methods.

    Clean up the HTML document.
    Reduce external HTTP requests.
    Sprites, compressed images, smaller images.
    Incorporate JavaScript at the bottom of the page.
    Minify CSS, JavaScript, HTML.
    CDN and Caching.

## 10. What is Ajax?

    AJAX (Asynchronous JavaScript and XML) allows applications to transport data to/from a server asynchronously without refreshing the page. This means that it is likely to update parts of a web page, without reloading the entire page. For instance, your new Gmail messages arrive and are marked as new even if you have not refreshed the web page.

## 11. what is closure?

    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

    -Closure is a local variable for function that kept in memo even after function is returned.
    -Closure’s conflicts happen when using for loop.

        function makeFunc() {
        var name = 'Mozilla';
        function displayName() {
        alert(name);
        }
        return displayName;
        }

        var myFunc = makeFunc();
        myFunc();

## 12. what is json?

    -(javascript object notation), is a lightweight format for storing and transportiong data from server to webpage.

## 13. Async vs sync?

    -Async operation you can move to other task before the pervious one is finished.
    -sync operation task is performd in sequence

## 14. what is Javascript?

    -JavaScript is a lightweight, cross-platform, and interpreted scripting language.

## 15. what is hoisting?

    -it mean a variable can be used before it has been declared.
    but in case const & let it will return reference error.

## 16. DOM vs BOM?

DOM is a subset of BOM.
-DOM Stands for Document Object Model:Defines a standard way to access and
manipulate HTML documents.
We can access any
markup content via
innerHTML,
innerText, or
textContent
properties

    -BOM Stands for Browser Object Model:is the top level of
    the DOM hierarchy.
    ▻ navigator object,
    ▻ screen object,
    ▻ history object
    ▻ location object,
    ▻ document object

**For some reason, the Browser Object Model is generally not referred to by its proper name. More often, it's usually wrapped up with the DOM. Because no standards exist for the BOM, each browser has its own implementation.**

## 17. ES6 Features

    ▰ let + const
    ▰ Binary and Octal literals
    ▰ default Parameters
    ▰ Classes
    ▰ rest parameters
    ▰ iterators
    ▰ spread operator
    ▰ Generators
    ▰ Destructuring (array/object)
    ▰ Symbols
    ▰ Arrow Functions
    ▰ Proxies
    ▰ Enhanced object literals
    ▰ Modules
    ▰ Template strings
    ▰ Module loaders
    ▰ for..of
    ▰ Promises
    ▰ math API
    ▰ number API
    ▰ string API
    ▰ array API
    ▰ object API
    ▰ Data Structure/Collection
    ▻ map
    ▻ set
    ▻ weakmap
    ▻ weakset

    ▰ES6 represents block scope via let, const.
    ▻ Block starts by { and ends by }
    ▰ Variables declared with let and const don’t
    hoist.
    ▰ Variables defined by let can be reassigned
    ▰ Variable defined by const cant be reassigned

**Nowadays we can use let to overcome closure problem with loops**

## 18. what is (IIFE): JavaScript Immediately-invoked Function Expressions ?

    An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations

## 19. what is Arrow Function?

    Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

    pros:
    - Arrow Function as an Expression
    - Arrow Function with One Argument
    - Arrow Function with no Argument
    - Multiline Arrow Functions

    cons:
    - You should not use arrow functions to create methods inside objects.
    - You cannot use an arrow function as a constructor.

## 20. what is rest Parameter?

    ▰Used in function definition and must be the last
    parameter in function definition.
    ▰It gathers all remaining arguments into an array
    element.

        function displayNames(p1, ...arr) {
        for (let i in arr) {
        console.log(arr[i])
        }
        }
        var fruits = ["apple", "strawberry",
        "banana", "orange", "mango"];
        displayNames(10, fruits)

## 21. what is spread operator?

    ▰Used in function invocation
    function dis(f, n) {
    console.log(f + "" + n)
    }
    var rest = ["ahmed", "ali"]
    dis(...rest)

    ▰Used also in Array
    var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
    var newFruits = ["kiwi", ...fruits]
    // ["kiwi", "apple", "strawberry", "banana", "orange", "mango"]
    var anotherNewFruits = ["kiwi", ...fruits, "others"]
    // ["kiwi", "apple", "strawberry", "banana", "orange", "mango", "others"]

## 22. what is Destructuring Assignment?

    -object destructure:
        const user = {
        id: 42,
        isVerified: true
        };

        const {id, isVerified} = user; //id=42 , isVerified=true

    -Array Destructuring:
        let users = ["ali", "nour", "kareem"];
        let [a, b, c] = users;
        console.log( a, b, c );
        //a = users[0]
        //b = users[1]
        //c = users[2]

## 23. what is Object shorthand literal creation?

<!-- BEFORE -->

**BEFORE**

    var User = function (id, firstName, lastName) {
    return {
    id: id,
    firstName: firstName,
    lastName: lastName
    };
    }

<!-- AFTER -->

**AFTER**

    var User = function (id, firstName, lastName) {
    return {
    id,
    firstName,
    lastName
    };
    }

## 24. what is Template strings?

    Template strings are string literals allowing embedded expressions using `` and ${}

## 25. what is prototypal inheritance?

    -Inheritance in JavaScript works through something called prototypes and this form of inheritance is often called prototypal inheritance

## **Angular Questions**

## 1. what is Directives?
    Directives are classes that add additional behavior to elements in your Angular applications. 

    types:
    Attribute Directives
    Component Directives
    Structural Directives

## 2.What is the AOT vs JIT?
    JIT(Just-in-Time) compilation: The application compiles inside the browser during runtime
    AOT(Ahead-of-Time) compilation: The application compiles during the build time.

## 3. what is SPA?
    
## **DEVOPS QUESTIONS**

## 1. What is Devops?

    -Devops is not a technology, tool or framework.

    Devops is a cultural movement , mindest , philosophy to coordinate produce better, morw reliable products.

**by automating infrastructure, workflow and continousuly measuring application performance for which they use a lot of tools**

## 2. What Devops lifecycle?

    you can visualize a dvops process as an infinite loop.

    Dev: code - build -plan -test
    ops: release - deploy - operate - monitor

## 3. what to learn about the tools used?

    1-doocker
    2-kubernetes

## 4. what is docker?

    Docker is a tool designed to make it easier to create, deploy and run applications by using containers.

## 5. How does docker work?

    docker packages an application and all its dependencies in a virtual container that can run on linux server.

    each container runs as an isolated process in the user space and take up less space than regular vms due to thier layered architecture.
    so it will always work the same regardless of its environment.

## 6. what is kubernetes ?

    kubernetes is an open source container orchestration platform that automates deploying, managing and scaling containerization apps.

## 7. What is difference between Continuous Deployment and Continuous Delivery?

Continuous Deployment and Continuous Delivery are two different processes.

    Continuous Deployment - refers a system that allows deployment of every new changes that comes in source code from a developer.
    Continuous Delivery - refers the automation of entire software release process.
