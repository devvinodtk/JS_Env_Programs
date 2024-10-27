addEventListener('message', ({data})=> {
    console.log(`inside web worker: `+data);
    const maxNumber = 10000000000;
    let sum = 0;
    for(let i=0;i<maxNumber;i++) {
        sum +=i;
    }
    postMessage(data + ':' +sum);
})