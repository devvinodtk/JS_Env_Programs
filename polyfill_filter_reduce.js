const arr = [1,2,3,4,5];

const newArray = arr.filter((el) => el > 3)
console.log(newArray);

Array.prototype.myFilter = function (cb) {
    let tempArray = []
    for(let i =0;i<this.length; i++) {
        if(cb(this[i], i, this))
            tempArray.push(this[i])
    }
    return tempArray;
}

const newArray1 = arr.myFilter((el)=> el > 3);
console.log(newArray1);

//--------------

const sum = arr.reduce((acc, val)=> acc + val, 0);
console.log(sum)

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;
    for(let i=0; i<this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this): this[i]
    }
    return acc
}

const sum1 = arr.myReduce((acc, val)=> acc + val, 0);
console.log(sum1)