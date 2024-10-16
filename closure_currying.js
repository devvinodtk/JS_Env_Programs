
//sum(6)(5)(4)

function sum(a){
    return function(b) {
        return function(c) {
            return a + b+ c;
        }
    }
}

console.log('sum is => '+sum(6)(5)(4));

function evaluate(operation) {
    return function(a) {
        return function(b) {
            switch(operation) {
                case 'sum': 
                    return a + b;
                case 'multiply':
                    return a * b;
                case 'subtract':
                    return a - b;
                case 'divide':
                    return a / b;
                default: 
                    return 'Invalid Operation';
            }
        }
    }
}

console.log('evaluated sum => ', evaluate('sum')(4)(2))
console.log('evaluated multiply => ', evaluate('multiply')(4)(2))
console.log('evaluated subtract => ', evaluate('subtract')(4)(2))
console.log('evaluated divide => ', evaluate('divide')(4)(2))


//Infinate currying 

function add(a) {
    return function(b) {
        if(b) return add(a+b)
            return a;
    }
}

console.log('Infinate currying => ', add(2)(3)(4)())

function curry(func) {
    return function curriedFunc(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function(...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const currySum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(currySum)

console.log('totalSum =>', totalSum(1)(2)(3)(4));