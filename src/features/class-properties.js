console.log('## class-properties')

// private properties
class IncreasingCounter {
  #count = 0;

  get value() {
    return this.#count;
  }
  increament() {
    this.#count++;
    return this.#count;
  }
}

const counter = new IncreasingCounter()

console.log('counter.increament()', counter.increament())

// class filed
class Animal {
  constructor(name) {
    this.name = name
  }
}

class Cat extends Animal {
  likeBaths = false;

  meow() {
    console.log('Meow!', this.likeBaths)
  }
}

const cat = new Cat('yaong')

console.log('cat.name', cat.name)
cat.meow()