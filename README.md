短信验证码 Node.js平台接口封装实现
-------

对[云片服务提供商](https://www.yunpian.com/api2.0/document-demo.html)中给出的node.js接口进行了封装并Promise化。

云片基于node提供了三种`短信验证码内容`模式：

|名称 | 说明 |
|--------|--------|
|自定义短信验证码| 开发人员可以自己定义短信的内容，如:【云片网】您的验证码是123456,千万不要告诉别人哦,但是一定要保证短信签名要一致，你的签名是【云片网】就必须写成【云片网】，千万不能写成【百度】|
|模板短信验证码  | 你需要在云片的个人后台管理中心注册短信验证码模板，模板注册成功后，你会得到一个模板ID|
|语音短信验证码  | 开发人员直接自定义数字验证码即可  |


## 安装
```
$ npm install yunpian-sms-service --save
```
-------

## 示例
以发送模板短信验证码为例：
```js

// 导入短信服务模块
const sms_service = require('yunpian-sms-service');

// apikey可在官网（https://www.yunpian.com)登录后获取
const apikey = '您的apikey';

// 修改为您要发送的手机号码，多个号码用逗号隔开
const mobile = '接收短信的手机号';

// 指定发送的模板编号，比如我在云片申请的模板ID为1234567
const tpl_id = 1234567;

// 指定发送模板的内容, 比如我申请模板内容为:`【node社区】您的验证码是#code#。如非本人操作，请忽略本短信`，
// 那么在发送短信时，模板中的`#code#`会被对象tpl_value中属性'#code#'的值替换。最终接收的短信内容为:
// `【node社区】您的验证码是5210。如非本人操作，请忽略本短信`
const tpl_value =  {'#code#':'5210'};

// 发送模板短信验证码
sms_service.send_tpl_msg(apikey, mobile, tpl_id, tpl_value)
.then(function(msg){
  // 发送成功   
  console.log(msg);
})
.catch((err) => {
  // 发送失败
  console.log(err);
});

```

## License
BSD
