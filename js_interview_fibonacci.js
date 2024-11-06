// Q2. Fibonacci Number
// Eg: Fibonacci Series - 0,1,1,2,3,5,8,13,21 ....
// F(0) = 0, F(1)= 1
// F(n) = F(n - 1) + F(n - 2) for n > 2

// Input n = 3, ------- >>>> Output: 2

function fibo(n) {
    // const arr = [0, 1, ];
    // for(let i =2 ; i< n; i++) {
    //     arr.push(arr[i-1] + arr [i-2])
    // }

    // console.log(arr)

    // return arr[n]

    if(n <= 1) return n;
    return fibo(n - 1) + fibo(n - 2);
    
}

console.log(fibo(6))