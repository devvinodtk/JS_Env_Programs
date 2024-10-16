//Spread operator with arrays
let user1 = ['Tom', 'Jill', 'Erik']
let user2 = ['Ben', 'Dave']

let allUsers = [...user1, ...user2];

console.log('allUsers => ', allUsers)
console.log('allUsers + new => ', [...allUsers, 'abc'])


//====== Spread operator with objects =====

const emp = {
    name: 'John',
    job : 'developer',
    address: {
        city: 'Blre',
        state: 'KA'
    }
}

const clonedEmp = {...emp};

// console.log(emp);
// console.log(clonedEmp);

clonedEmp.address.city = 'TVM'
clonedEmp.address.state = 'KL'

console.log(emp);
console.log(clonedEmp);

// spread operator does a shoallow cloning not deep cloning.



//====== Spread operator with functions =====

const score = [20, 30, 40, 50];

console.log(Math.min(10,20,30,40));
console.log(Math.min(...score));
console.log(Math.max(...score));


let toDos = [
    {task: 'reading', completed: true},
    {task: 'painting', completed: false}
];

function addToDos(newToDo) {
    return [...toDos, newToDo]
}

const newList = addToDos({task: 'recording', completed: false});

console.log(toDos);
console.log(newList);

