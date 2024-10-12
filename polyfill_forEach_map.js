const arr = [1,2,3,4,5];

//arr.forEach((el, i, ar) => console.log(el * 2)) 

Array.prototype.myForEach = function (cb) {
    for(let i=0;i<this.length;i++) {
        cb(this[i], i, this)
    }
}

arr.myForEach((ele, index, array) => { 
    console.log('index => '+ index+ ', ele * 2 =>'+ele * 2);
});

//const newArray = arr.map((el, i, ar) => el * 2)
//console.log('newArray =>', newArray)

Array.prototype.myMap = function (cb) {
    const tempArray = []
    for(let i=0;i<this.length;i++) {
        tempArray.push(cb(this[i], i, this))
    }
    return tempArray
}

const newArray = arr.myMap((el, i, ar) => el * 2)
console.log('newArray =>', newArray)