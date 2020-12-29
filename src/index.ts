const name = "jeong",
  age = 20,
  gender = "male";

const sayHi = (name: string, age: number, gender?: string): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
};

// sayHi(name, age, gender);
// sayHi(name, age);
sayHi("Jeong", 33, "male");

export {};
