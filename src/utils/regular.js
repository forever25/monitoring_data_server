/*
 * @Author: your name
 * @Date: 2021-02-24 17:07:51
 * @LastEditTime: 2021-05-28 10:21:09
 * @LastEditors: zws
 * @Description: 验证规则类
 * @FilePath: \tricolorcat\serve\src\utils\regular.js
 */
export default {
    name: /^[\u4e00-\u9fa5_a-zA-Z]{1}[\u4e00-\u9fa5_a-zA-Z0-9]{1,15}$/,
    mail: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    password: /^[A-Za-z0-9_]{8-16}$/,
    phone: /^[1-9]{1}[0-9]{10}$/,
}