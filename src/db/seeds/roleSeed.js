/*
 * @Author: your name
 * @Date: 2021-05-20 17:55:12
 * @LastEditTime: 2022-08-05 13:42:42
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\db\seeds\roleSeed.js
 */
import Roles from '@/db/models/Roles';

(async () => {
    await Roles.create({
        roleName: '超级管理员',
        isDefault: 1,
        roleCode: "ROLE_ADMIN",
    })
})();