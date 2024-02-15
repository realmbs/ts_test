console.log('Hello World');

const sayHello = (name: string, date: Date): string => {
  return `Hello, ${name}, today is ${date.toDateString()}`
}
console.log(sayHello('John', new Date()));