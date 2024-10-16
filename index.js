console.log('Hello world')

// function cb() {
//     console.log('callback called')
// }

// setTimeout(cb, 3000);

// let startTime = new Date().getTime();
// let endTime = startTime;

// while(endTime < startTime + 10000) {
//     endTime = new Date().getTime();
// }

/*** ========================= */

let firstName = 'Jhon';

function getName() {
    var firstName = 'Peter'
    console.log('Inside firstName: ', firstName);
}
//getName();

{
    let firstName = 'Parker'
    //console.log('Inside \'if\' firstName: ', firstName);
}

// console.log('Outside firstName: ', firstName);
// console.log('End')

/*** ========================= */

function addToCart() {
    this.prodName = 'Laptop';

    this.getProduct = function() {
        console.log(this)
        console.log(this.prodName);
        let self = this;
        setTimeout(function() {
        //setTimeout(()=> {
            console.log(this)
            console.log('Self Prod Name :', self.prodName);
            console.log('this Prod Name :', this.prodName);
        }, 1000);
    }
}

let obj = new addToCart();

//obj.getProduct();

/*** ========================= */

function abc(){
    console.log(arguments)
    console.log('this length is ', this.length)
}
//abc(10,20,30)
//abc.call([10,20,30])
//abc(2,4,5,7)

