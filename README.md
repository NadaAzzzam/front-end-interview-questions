## **JS QUESTIONS**

## 1. what is javascript ?

- js is a high-level ("we don't have to worry about complex styff like memory management")
  , object-oriented ("based on object, for storing most kinds of data")
  , multi-paradigm ("we can use different styles of programming")
  programming language ("instruct computer to do things")

## 2. JS Releases?

- ES5, ES6/ES2015, ES7/ES2016, ES8/ES2017, ES9/ES2018, ES10/ES2019, ES11/ES2020
- ES:ECMAScript, From ES6 they called it modern javascript and there is a new updates to JS every single year.

## 3. whta is a variable?

- it is baseically a box into which we can store a value.

## 4. object and primitves?

- so value is only primitves when it's not an object.

## 5. the 7 primitves data types?

1. Number
2. String
3. Boolen

4. undefined:value taken of variable is not yet defind. ## let children
5. Null: aslo mean emoty value and type of null is an object.
6. symbol(ES5):value that is unique and cannot be changed [Not useful for now]
7. bigInt(ES2020):larger intergers than the number type can hold

**JS has dynamic typing: we don't have to manually define the data type of the value stored in a variable. instead, data types are determind automatically**

## 6. what's defenation of "typeof" ?

- it is special operator to know type of variable.

## 7. what's operator?

- it allow us to transform values or combine multiple values, and there is many tpes of operator:

#### -mathematical or arithmetic operation

    let x= 100 +200

#### -assignment operator

    let x += 1
    let x -= 1
    let x--
    let x++

#### -comparison operator

    let x = 100
    let y = 500

    x>y // false

**math operator executed before comparison operators**

## 8. what's type conversion and type coerion?

- type conversion: when you manually convert from one type to anthor.

  let x=10
  String(x) + 1 // 101
  Number(x) + 1 // 11

- type coerion: when js automatically converts types behind the sciene.

  '12'-'10' //2
  '12'+'10' //1210

## 9. How to check truthy and falsy ?

    you can check it with Boolean().

## 10. what's difference between experission vs statements?

- experission: like a piece of code that produces a value. //3 + 4
- statements: like a bigger piece of code that's executed and which doesn't produce a value on itself. "like full sentences that translate our actions" //if(true){const x ='10'}

**Template literal expect experission not a statement**

## 11. Brief History Of JavaScript with explanation.

- **1995:** first version of js on 10 days it was called mocha.
- **1996:** mocha change to js to attract java developers
- **1997:** microsoft launches IE, copying js from netscape.
- **2009:** ES5 is released with great features.
- **2015:** ES6/ES2015 was released: the biggest update to the language ever! and ES changes to an annual release cycle in order to ship less feature per update.

#### Note : modern js engine have backwords compatibility: don't break the web, old features never removed.

## 12. what is the benfits of use strict mode?

to avoide an accidental errors.

- forbids us to do certain things.
- it will create visible errors for us.

## 13. what's DRY?

- Don't Repeat Your Self: which mean don't repeat your code, so the perfect case to implement it is using functions and to do reusuble code block.

## 14. what's function declartion vs function expressions?

- function expression produce value.
- function declartion we can call before we can defind in the code because of hoisting, but with function expression we can not do that.

## 15. what's the parameters vs. argument?

- is kind of placeholder to receive input values only inside the function, and the argument is the actual values of the function parametares.

## 16. what's arrow function?
- is third type of function that was added by ES6 and it's form of function expression that is shorter and faster to write.

