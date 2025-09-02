var obj = {name: 'vinod'}

function sayHello(age, role) {
    return "Hello "+ this.name+ '. Role is '+ role +' & age is ' + age;
}

const bindFunc = sayHello.bind(obj)

// console.log(sayHello.call(obj, 20, 'developer'));
// console.log(sayHello.apply(obj, [20, 'developer']));

// console.log(bindFunc(24, 'tester'))
// console.log(bindFunc(34, 'blogger'))

/** ====== Bind Polyfill ========  */

let newObj = {
    name: 'Steve'
}

let printName = {
    name: 'Tony',
    sayHello: function(time, place = "Bangalore") {
        console.log(`Hello ${this.name} Good ${time} and welcome to ${place}`);
    }
}

//let HiFunc = printName.sayHello.bind(newObj);

Object.prototype.myBind = function(myObj, ...args) {
    myObj.myMethod = this;
    return function () {
        myObj.myMethod(...args)
    }
}

let HiFunc1 = printName.sayHello.myBind(newObj, 'Morning', 'Delhi');
HiFunc1();

/** ====== call Polyfill ========  */

Object.prototype.myCall = function(myObj, ...args) {
    myObj.myMethod = this;
    myObj.myMethod(...args)
}

// printName.sayHello.myCall(newObj, 'After Noon');

/** ====== call Polyfill ========  */

Object.prototype.myApply = function(myObj, ...args) {
    myObj.myMethod = this;
    myObj.myMethod(...args)
}

// printName.sayHello.myApply(newObj, ['Evening']);