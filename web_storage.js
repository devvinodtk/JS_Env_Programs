localStorage.setItem('name', 'devvinodtk')
console.log(localStorage.getItem('name'));

localStorage.setItem('name', 'vinodtk')
console.log(localStorage.getItem('name'));

localStorage.removeItem('name')
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name', 'Bob')
console.log(sessionStorage.getItem('name'));

sessionStorage.setItem('name', 'Chris')
console.log(sessionStorage.getItem('name'));

sessionStorage.removeItem('name')
console.log(sessionStorage.getItem('name'));


document.cookie='name=Kate;expires='+new Date(2024, 11, 31, 23, 59, 59).toUTCString();
