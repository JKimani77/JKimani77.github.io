function testScoped (randinT) {
    let randomVar = 2;
    let randomStr = 'fourrrrrrrrrrrrrrr';
    return randomVar + randomStr + randinT

}

const Vehicles = {
    model : "renault",
    year : 1970,
    drive: "lefthand",
    transmission: "6-speedsequential",
};
Vehicles.model();
delete[Vehicles.drive];

class Rectangle {
    constructor(height, width) {
      this.name = 'Rectangle';
      this.height = height;
      this.width = width;
    }
    sayName() {
      console.log(`Hi, I am a ${this.name}.`);
    }
    get area() {
      return this.height * this.width;
    }
    set area(value) {
      this._area = value;
    }
  }
  
  class Square extends Rectangle {
    constructor(length) {
      this.height; // ReferenceError, super needs to be called first!
  
      // Here, it calls the parent class's constructor with lengths
      // provided for the Rectangle's width and height
      super(length, length);
  
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = 'Square';
    }
  }class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}