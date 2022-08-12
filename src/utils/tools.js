/*
 * @Author: your name
 * @Date: 2021-05-20 17:48:31
 * @LastEditTime: 2022-08-05 17:15:09
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\utils\tools.js
 */
/**
 * @description: 生成随机表ID
 * @param {*}
 * @return {string}
 */
export function buildId() {
    return + new Date() + '-' + Math.random().toString(32).substr(2);
}

/**
 * @description: 生成随机表ID
 * @param {*}
 * @return {string}
 */
export function deleteObjectUndefined(data) {
    Object.keys(data).forEach(item => data[item] === undefined && delete data[item]);
}

