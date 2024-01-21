var fs = require('fs');

var data = '';

var readstream = fs.createReadStream('input.txt');

readstream.setEncoding('UTF8');

readstream.on('data', function(chunk) {
    console.log('---' + chunk);
    data+=chunk;
});

readstream.on('end', function() {
    console.log('----------');
    console.log(data);
});

readstream.on('error', function(err) {
    console.log(err.stack);
})

console.log('程序执行完毕');



