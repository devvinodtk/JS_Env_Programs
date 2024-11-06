// Q3. -Valid Anagram
// An anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the  original letters exactly. 

// Input: (s="anargram") (t="nagaram") --------->>>>>  Output: true
// Input: (s="cat") (t="car") --------->>>>>  Output: false

// function isAnagram(s, t) {
//     if(s.length !== t.length) return false

//     s = s.split("").sort().join("")
//     t = t.split("").sort().join("")

//     return s === t
// }

function isAnagram(s, t) { 
    if(s.length !== t.length) return false

    let obj1 = {}
    let obj2 = {}

    for(let i=0; i<s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    
    for(const key in obj1) {
        if(obj1[key] !== obj2[key]) return false
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram"))