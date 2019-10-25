var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

// 创建web服务
http.createServer( function (request, response) {  
    console.log(request.url);
    // 解析请求路径
   var filepath='';
    switch (request.url){
        case '/':
        filepath='/index.html';
        break;
        default :
        filepath=request.url;
        break;
    } 

    // No.1
    // 设置请求的返回头type
    // response.setHeader('Content-Type',mime.getType(path.basename(filepath)));
    // //格式必须为binary，否则会出错
    // var content = fs.readFileSync(filepath.substr(1),'binary');
    // response.writeHead(200,'OK');
    // //格式必须为binary，否则会出错
    // response.write(content,'binary');
    // response.end();

    // No.2
    // 设置返回类型
    response.setHeader('Content-Type',mime.getType(path.basename(filepath)));
    var stream = fs.createReadStream(filepath.substr(1));
    var responseData = [];//存储文件流
    if(stream){//判断状态
      stream.on('data',function(chunk){
        responseData.push(chunk);
      });
      stream.on('end',function(){
        var finalData = Buffer.concat(responseData);
        response.write(finalData);
        response.end();
      })
    }
}).listen(8081);

// 控制台输出提示信息
console.log('Server running at http://127.0.0.1:8081/');