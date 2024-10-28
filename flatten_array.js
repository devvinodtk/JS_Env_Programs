const a = [1,2,3,[4,[5,6]],7,8]

const flattenedArr = []
function flattenArray (a) {
    a.forEach(ele => {
        if(Array.isArray(ele)){
            flattenArray(ele)
        } else {
            flattenedArr.push(ele)
        }
    })
    return flattenedArr;
}

console.log(flattenArray(a))