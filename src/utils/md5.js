/*
 * @Author: zws
 * @Date: 2021-05-28 11:37:48
 * @LastEditTime: 2021-05-28 11:51:13
 * @LastEditors: zws
 * @Description:
 * @FilePath: \serve\src\utils\md5.js
 */
import crypto from 'crypto';

/**
 * @description: 加密
 * @param {string} text 加密文本
 * @return {string} 加密后文本
 */
export function encrypt(text) {
    const hash = crypto.createHash('md5');
    hash.update(text)
    return hash.digest('hex')
};
