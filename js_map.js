const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}


const myMap1 = new Map();
myMap1.set(0, "zero");
myMap1.set(1, "one");

for (const [key, value] of myMap1) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap1.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap1.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap1.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

myMap1.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
  // 0 = zero
  // 1 = one

  const kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
  ];
  
  // Use the regular Map constructor to transform a 2D key-value Array into a map
  const myMap2 = new Map(kvArray);
  
  console.log(myMap2.get("key1")); // "value1"
  
  // Use Array.from() to transform a map into a 2D key-value Array
  console.log(Array.from(myMap2)); // Will show you exactly the same Array as kvArray
  
  // A succinct way to do the same, using the spread syntax
  console.log([...myMap2]);
  
  // Or use the keys() or values() iterators, and convert them to an array
  console.log(Array.from(myMap2.keys())); // ["key1", "key2"]

  const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
  const merged = new Map([...first, ...second]);
  
  console.log(merged.get(1)); // uno
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three


  const firstNew = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
  const secondNew = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
  // Merge maps with an array. The last repeated key wins.
  const mergedNew = new Map([...firstNew, ...secondNew, [1, "un"]]);
  
  console.log(merged.get(1)); // un
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three

  //Create a map from the object

  const customer = {
    id: 101,
    name: 'Mark',
    gender: 'Male',
    city: 'London'
  }

  let customerArray = Object.entries(customer);

  let customerMap = new Map(customerArray);
  console.log(customerMap);

  // Map(4) {'id' => 101, 'name' => 'Mark', 'gender' => 'Male', 'city' => 'London'}