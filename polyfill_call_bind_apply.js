var obj = {name: 'vinod'}

function sayHello(age, role) {
    return "Hello "+ this.name+ '. Role is '+ role +' & age is ' + age;
}

const bindFunc = sayHello.bind(obj)

console.log(sayHello.call(obj, 20, 'developer'));
console.log(sayHello.apply(obj, [20, 'developer']));

console.log(bindFunc(24, 'tester'))
console.log(bindFunc(34, 'blogger'))