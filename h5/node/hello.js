console.log('hello world node js');

console.log('全局对象');
console.log(__filename);
console.log(__dirname);

function printHello() {
    console.log('hello, world! printHello');
};

setTimeout(() => {
    printHello();
}, 1000);