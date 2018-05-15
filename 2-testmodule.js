function hello(name) {
    console.log('Hello ' + name);
}

const obj = {
    test: 15
}

const a = 15;

exports.printHello = hello;
exports.test = a;
exports.obj = obj;

obj.test = 36;
