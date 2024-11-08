const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4}

const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }

for (const item of mySet1) {
    console.log(item);
  }
  // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
  for (const item of mySet1.keys()) {
    console.log(item);
  }
  // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
  for (const item of mySet1.values()) {
    console.log(item);
  }
  // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
  // key and value are the same here
  for (const [key, value] of mySet1.entries()) {
    console.log(key);
  }
  // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
  // Convert Set object to an Array object, with Array.from
  const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]
  
  // the following will also work if run in an HTML document
  mySet1.add(document.body);
  mySet1.has(document.querySelector("body")); // true
  
  // converting between Set and Array
  const mySet2 = new Set([1, 2, 3, 4]);
  console.log(mySet2.size); // 4
  console.log([...mySet2]); // [1, 2, 3, 4]
  
  // intersect can be simulated via
  const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));
  
  // difference can be simulated via
  const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));
  
  // Iterate set entries with forEach()
  mySet2.forEach((value) => {
    console.log(value);
  });
  // 1
  // 2
  // 3
  // 4


const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray

// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]

// Case sensitive (set will contain "F" and "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]