/*
 * @Author: your name
 * @Date: 2021-02-24 16:37:47
 * @LastEditTime: 2022-08-05 14:52:33
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\utils\responseTemplate.js
 */
/**
 * @description: 根据传值返回模板
 * @param {any} data 为字符返回对应的msg错误模板，为对象或者数组是data模板
 * @param {*} code 默认200
 * @return {object}
 */
export function responseTemplate(data, code = 200) {
    if (typeof data === 'string') {
        return {
            code: code,
            msg: data,
            success: code === 200
        }
    } else {
        return {
            code: code,
            data: data,
            success: code === 200
        }
    }
}