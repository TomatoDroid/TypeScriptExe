class Animal {
  type = "Animal";
  say(name: string) {
    console.log(`I'm ${name}`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woff! Woff!");
  }
}

const dog = new Dog();
dog.bark();
dog.say("Q");
dog.type;

// =======================================

// abstract class Addr {
//   abstract x: number;
//   abstract y: number;
//   abstract add(): number;
//   displayName = "Addr";
//   addTwice(): number {
//     return this.x + this.y;
//   }
// }

// class NumAdder extends Addr {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     super();
//     this.x = x;
//     this.y = y;
//   }
//   add(): number {
//     return this.x + this.y;
//   }
// }
// const numAdder = new NumAdder(1, 2);
// console.log(numAdder.displayName); // => "Adder"
// console.log(numAdder.add()); // => 3
// console.log(numAdder.addTwice()); // => 6

// =======================================

interface IAddr {
  x: number;
  y: number;
  add: () => number;
}

class NumAdder implements IAddr {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add() {
    return this.x + this.y;
  }
  addTwice() {
      return (this.x + this.y) * 2;
  }
}
