function Person (){
    this.age = 0;
  
    setInterval(function() {
      this.age++; // `this` does NOT refer to the Person instance
      console.log(this.age);
    }, 1000);
}

// new Person().bind(age = 30);

const obj = {
    count: 0,
    increment() {
      let count = 20
      const inner = () => {
        this.count++; // Lexically bound to obj
      };
      inner();
    }
  };
  
  obj.increment();
  console.log(obj.count);