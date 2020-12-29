class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  public getAge(): number {
    return this.age;
  }
}

const jeong = new Human("jeong", 20, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.getAge()}, you are a ${person.gender}!`;
};

// sayHi(name, age, gender);
// sayHi(name, age);
// sayHi("Jeong", 33, "male");

console.log(sayHi(jeong));

export {};
