console.log('Hello world')

function cb() {
    console.log('callback called')
}

setTimeout(cb, 3000);

let startTime = new Date().getTime();
let endTime = startTime;

while(endTime < startTime + 10000) {
    endTime = new Date().getTime();
}

console.log('End')