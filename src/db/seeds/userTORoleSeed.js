/*
 * @Author: your name
 * @Date: 2021-05-20 17:55:12
 * @LastEditTime: 2022-08-05 14:08:42
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\db\seeds\userTORoleSeed.js
 */
import UserToRoles from '@/db/models/UserToRoles';

(async () => {
    await UserToRoles.create({
        uid: 1,
        rid: 1
    })
})();