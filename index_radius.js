const radius = [3,1,2,4];

const area = function(radius) {
    return (Math.PI*radius*radius).toFixed(2)
}

const circumference = function(radius) {
    return (2* Math.PI*radius).toFixed(2)
}

const diameter = function(radius) {
    return (radius * 2).toFixed(2)
}

Array.prototype.calculate = function (logic) {
    const output = []
    for(let i=0;i<this.length; i++){
        output.push(logic(this[i]))
    }
    return output;
}

console.log('area => ', radius.calculate(area));
console.log('circuference => ', radius.calculate(circumference));
console.log('diameter => ', radius.calculate(diameter));