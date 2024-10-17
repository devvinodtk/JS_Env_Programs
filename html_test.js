const names = ['Tom', 'John', 'Kathi', 'Sid'];
let count = 0;

const header = document.getElementById('header');
header.onclick = () => {
    if(count < names.length){
        header.innerText = names[count++]
    } else {
        count = 0;
        header.innerText = names[count++]
    }
}