console.log('Hello World');

var sayHello = function (name, date) {
    return "Hello, ".concat(name, ", today is ").concat(date.toDateString());
};
console.log(sayHello('John', new Date()));
