let newObj = {
    name: 'Steve'
}

let wishUser = {
    name: 'John',
    sayHello: function(time) {
        console.log(`Hello, ${this.name} Good ${time}`);
    }
}

Object.prototype.myCall = function(context, ...args) {
    context.myMethod = this;
    context.myMethod(...args);
}

Object.prototype.myApply = function(context, ...args) {
    context.myMethod = this;
    context.myMethod(...args);
}

Object.prototype.myBind = function(context, ...args) {
    context.myMethod = this
    return function() {
        context.myMethod(...args);
    }
}

wishUser.sayHello('Morning');

wishUser.sayHello.myApply(newObj, ['Morning']);
wishUser.sayHello.myCall(newObj, 'after-noon');

let func = wishUser.sayHello.myBind(newObj, 'Evening');
func()