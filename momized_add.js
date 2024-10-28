const map = new Map()

function memoizeOne(fn) {
    return function(...args) {
        const key = args.join('_');
        if(map.has(key)) {
            console.log(`memoized result: ${map.get(key)}`)
            return map.get(key);
        } else {
            const result = fn(...args)
            map.set(key, result);
            return result;
        }
    }
}

// const add = (a, b) => a + b;
// const memoizedAdd = memoizeOne(add);

// console.log(memoizedAdd(1, 2))

// console.log(memoizedAdd(1, 2))

// console.log(memoizedAdd(2, 3))

// console.log(memoizedAdd(2, 3))

// console.log(memoizedAdd(1, 2))

/** =================================================== */

function memoizeFunction(fn, cache) {
    return function(...args) {
        const key = args.join('_');
        if(cache.has(key)) {
            console.log(`memoized result: ${cache.get(key)}`)
            return cache.get(key);
        } else {
            const result = fn(...args)
            cache.set(key, result);
            return result;
        }
    }
}

const cache = new Map()
const addNums = (a, b) => a + b;
const memoized_add = memoizeFunction(addNums, cache);

console.log(memoized_add(1, 2))

console.log(memoized_add(1, 2))

console.log(memoized_add(2, 3))

console.log(memoized_add(2, 3))

console.log(memoized_add(1, 2))