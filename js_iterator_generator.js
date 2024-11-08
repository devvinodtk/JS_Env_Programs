
// iterator object.

/***

const iter = {
    counter: 0,
    next() {
        return {
            value: this.counter++,
            done: this.counter >= 10,
        }
    }
}

let next
do {
    next = iter.next();
    console.log(next.value)
} while(!next.done)

*/

// iterable object

const iter = {
    counter: 0,
    next: function() {
        return {
            value: ++this.counter,
            done: this.counter >= 11,
        }
    },
    [Symbol.iterator]: function (){
        return this;
    }
}

// for(const i of iter) {
//     console.log(i)
// }

//  console.log([...iter]) 

// If both the above for ... of and [...iter] is enabled, then the later won't print anything,
// since the iterable obj is already consumed. Use Generator instead to create multiple instances.

 
// Generator 

function* fiboGenerator(max = 100) {
    let a = 0;
    let b = 1;
    yield a;
    yield b;

    while(true) {
        const c = a + b;
        if(c >= max) break;
        yield c;
        a = b;
        b = c;
    }
}

let gen1 = fiboGenerator(30);
let gen2 = fiboGenerator();



for(const val of gen1) {
    console.log(val);
}

console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())