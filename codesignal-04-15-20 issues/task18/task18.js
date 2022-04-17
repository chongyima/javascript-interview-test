const object = {
  name: "object",
  subObject: {
    name: "subObject",
    printName() {
      console.log(this.name);
    }
  },
  printName() {
    this.subObject.printName();
  }
};

const printName = object.subObject.printName.bind(object);
printName();
