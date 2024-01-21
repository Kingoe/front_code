var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});

    var params = url.parse(req.url, true).query;
    res.write('网站' + params.name);
    res.write("\n");
    res.write('url' + params.url);
    res.write('inspect req');
    res.write('\n');
    res.end(util.inspect(url.parse(req.url, true)));

    res.end();

}).listen(3800)