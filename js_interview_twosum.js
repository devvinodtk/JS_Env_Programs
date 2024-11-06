// Q.4 Two Sum Problem
// Given an array of integer numbers and an integer target
// return the indicies of the two numbers such that they add up to target

//Input: nums = [2,7,11,15], target: 9 --------->>>>>  Output: [0, 1]
//Input: nums = [3,2,4], target: 6 --------->>>>>  Output: [1, 2]

//Brute force solution
// function twoSum(nums, target) {
//     for(let i=0; i<nums.length; i++) {
//         for(let j=i+1; j<nums.length; j++) {
//             if(nums[i]+ nums[j] === target) return [i, j]
//         }
//     }
// }

// Using JS Objects

function twoSum(nums, target) { 
    let obj={}
    for(let i=0; i<nums.length; i++) {
        let n = nums[i]
        if(obj[target - n] >= 0) {
            return [obj[target - n], i]
        }
        obj[nums[i]] = i
    }
}

let output = twoSum([3,2,3], 6);
console.log(output)