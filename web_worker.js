const worker = new Worker('worker_script.js');
const sumButton = document.querySelector('#calculate_sum');
const changeBGButton = document.querySelector('#change_bg');

changeBGButton.addEventListener('click', function(){
    (document.body.style.background !== 'green') ?
    (document.body.style.background = 'green'): 
    (document.body.style.background = 'blue')
})

sumButton.addEventListener('click', function(){
    worker.postMessage('Calculated Sum');
})

// worker.onmessage = (msg) => {
//     alert(msg.data);
// }

worker.addEventListener('message', ({data}) => {
    alert(data);
})