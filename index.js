var https = require('https');
var qs = require('querystring');

// 发送模板短信验证码
exports.send_tpl_msg = function(apikey, mobile, tpl_id, tpl_value){

    // 匹配模板发送https地址
    var sms_host = 'sms.yunpian.com';

    // 指定模板发送接口https地址
    send_tpl_sms_uri = '/v2/sms/tpl_single_send.json';

    var post_data = {
        'apikey': apikey,
        'mobile': mobile,
        'tpl_id': tpl_id,
        'tpl_value': qs.stringify(tpl_value)
    };

    // 转换post请求要发送的数据
    var content = qs.stringify(post_data);

    // 配置post请求
    var options = {
            hostname: sms_host,
            port: 443,
            path: send_tpl_sms_uri,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
    };

    return new Promise(function(resolve, reject){
        // https.request返回一个http.ClientRequest 类的实例，该对象在 http.request() 内部被创建并返回。 它表示着一个正在处理的请求。
        var req = https.request(options, function (res) {
            res.setEncoding('utf8');

            // 监听对post请求的响应
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                resolve(chunk);
            });

        });

        // 对于所有的 'error' 事件，如果没有注册监听器，则抛出错误,所以最好加上error事件监听
        req.on('error', (err) => {
            console.error(`发送短信验证码错误: ${e.message}`);
            reject(err);
        });

        // 写入数据到请求主体,也就是写到请求的云片地址
        req.write(content);

        // 使用 http.request() 必须总是调用 req.end() 来表明请求的结束，即使没有数据被写入请求主体
        req.end();
    });
}

// 发送自定义短信验证码
exports.send_single_msg = function(apikey, mobile, text){

    // 自定义短信验证码https请求地址的路径
    var send_sms_uri = '/v2/sms/single_send.json';

    // 自定义短信验证码https请求地址
    var sms_host = 'sms.yunpian.com';

    var post_data = {
      'apikey': apikey,
      'mobile':mobile,
      'text':text
    };//这是需要提交的数据
    var content = qs.stringify(post_data);

    // 配置post请求
    var options = {
            hostname: sms_host,
            port: 443,
            path: send_sms_uri,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
    };

    return new Promise(function(resolve, reject){
        // https.request返回一个http.ClientRequest 类的实例，该对象在 http.request() 内部被创建并返回。 它表示着一个正在处理的请求。
        var req = https.request(options, function (res) {
            res.setEncoding('utf8');

            // 监听对post请求的响应
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                resolve(chunk);
            });

        });

        // 对于所有的 'error' 事件，如果没有注册监听器，则抛出错误,所以最好加上error事件监听
        req.on('error', (err) => {
            console.error(`发送短信验证码错误: ${e.message}`);
            reject(err);
        });

        // 写入数据到请求主体,也就是写到请求的云片地址
        req.write(content);

        // 使用 http.request() 必须总是调用 req.end() 来表明请求的结束，即使没有数据被写入请求主体
        req.end();
    });
}


// 发送语音短信验证码
exports.send_voice_msg = function(apikey, mobile, code){

    // 发送语音验证码接口https地址
    var voice_host = 'voice.yunpian.com';

    // 发送语音验证码请求路径
    send_voice_uri = '/v2/voice/send.json';

    var post_data = {
    'apikey': apikey,
    'mobile':mobile,
    'code':code,
    };
    var content = qs.stringify(post_data);

    // 配置post请求
    var options = {
            hostname: voice_host,
            port: 443,
            path: send_voice_uri,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
    };

    return new Promise(function(resolve, reject){
        // https.request返回一个http.ClientRequest 类的实例，该对象在 http.request() 内部被创建并返回。 它表示着一个正在处理的请求。
        var req = https.request(options, function (res) {
            res.setEncoding('utf8');

            // 监听对post请求的响应
            res.on('data', function (chunk) {
                // console.log('BODY: ' + chunk);
                resolve(chunk);
            });

        });

        // 对于所有的 'error' 事件，如果没有注册监听器，则抛出错误,所以最好加上error事件监听
        req.on('error', (err) => {
            // console.error(`发送短信验证码错误: ${e.message}`);
            reject(err);
        });

        // 写入数据到请求主体,也就是写到请求的云片地址
        req.write(content);

        // 使用 http.request() 必须总是调用 req.end() 来表明请求的结束，即使没有数据被写入请求主体
        req.end();
    });
}
