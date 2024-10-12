const arr = [5,1,3,2,6];

const userAge = [26, 75, 50, 26]

const double = (x) => x*2;
const binary = (x) => x.toString(2);

const oddValues = (x) => (x % 2 !== 0)

const sum = (acc, val) => acc + val;

const maxVal =(max, val) => {
    if(val > max) max = val
    return max
}

const ageWithCount = (acc, curr) => { 
    if(acc[curr]) {
        acc[curr] +=1;
    } else {
        acc[curr] = 1
    }

    return acc
}

const ageLessthan40 = (x)=> x < 40


//double the values
console.log('doubled array =>', arr.map(double));

//print binary values
console.log('binary array =>', arr.map(binary));

// filter odd values
console.log('odd Values =>', arr.filter(oddValues));

console.log('Sum of values =>', arr.reduce(sum))

console.log('Sum of values =>', arr.reduce(maxVal, 0))

console.log('Ages with occurance => ', userAge.reduce(ageWithCount, {}));

console.log('Ages Less than 40 => ', userAge.filter(ageLessthan40));

