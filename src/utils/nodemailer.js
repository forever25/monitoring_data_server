/*
 * @Author: your name
 * @Date: 2021-02-24 16:18:32
 * @LastEditTime: 2021-05-28 10:20:06
 * @LastEditors: your name
 * @Description: 发送电子邮件
 * @FilePath: \tricolorcat\serve\src\utils\nodemailer.js
 */
import nodemailer from ('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    auth: {
        user: 'forever__yearn@163.com',
        pass: 'FBRHXXTEQYVRRBMC'
    }
});

export function sendMail() {
    var mailOptions = {
        from: 'forever__yearn@163.com', // 发件地址
        to: '1746310780@qq.com', // 收件列表
        subject: '激活验证码', // 标题
        //text和html两者只支持一种
        text: '用户验证码', // 标题
        // html: '<b>Hello world ?</b>' // html 内容
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}