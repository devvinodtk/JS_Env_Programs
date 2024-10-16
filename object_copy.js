/**
 * Shallow Copy: When we copy an object/array to another object/array, both original object and copied object refer to the same obj reference.
 * 
 * Deep Copy: When we copy an object/array to another object/array, both original object and copied object refer to the different obj reference.
 * 
 * Primitive types (number, boolean, string, null, undefined) are immutable and always applies Deep Copy.
 */

let originalVal = {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name
    },
    address: {
        city: 'Blre',
        state:'KA'
    }
}

let copiedVal = originalVal //shallow copy, same reference

let copiedVal1 = JSON.parse(JSON.stringify(originalVal)) // deep copy, but wont maintain, the function inside the objects

let copiedVal2 = Object.assign({}, originalVal); //deep copy, but nested objects are shallow copied. Does a partial deep copy

let copiedVal3 = {...originalVal} // deep copy, but nested objects are shallow copied. Does a partial deep copy

let copiedVal4 = {...originalVal, name:'Peter', address: { ...originalVal.address, city: 'Mysore'}} // Does a deep copy of nested obj. But not efficient.

console.log(originalVal)
console.log(copiedVal4)

// Use a library like Lodash, underscore template etc. 