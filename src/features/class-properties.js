console.log('## class-properties')

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

console.log(counter.increament())
