var fs = require('fs');

var data = '你好生活，你好2024，你好node js  i am coming in your body';

var writestream = fs.createWriteStream('output.txt');

writestream.write(data, 'utf8');

writestream.end();

writestream.on('finish', function() {
    console.log('写入完成');
});

writestream.on('error', function(err){
    console.log(err.stack);
});

console.log('程序执行完毕');


