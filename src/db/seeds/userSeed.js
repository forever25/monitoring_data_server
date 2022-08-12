/*
 * @Author: your name
 * @Date: 2021-05-20 17:55:12
 * @LastEditTime: 2022-08-05 13:49:39
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\db\seeds\userSeed.js
 */
import Users from '@/db/models/Users';
import { encrypt } from '@/utils/md5';

(async () => {
    await Users.create({
        username: 'aaa',
        password: encrypt('123456' + encrypt('aaa')),
        email: '123131@163.com',
        phone: "15175756532"
    })
})();