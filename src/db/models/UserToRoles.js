/*
 * @Author: zws
 * @Date: 2021-05-28 10:58:10
 * @LastEditTime: 2022-08-15 11:28:37
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description:
 * @FilePath: \serve\src\db\models\UserToRoles.js
 */
import { sequelize, Model, DataTypes } from '@/db/sequelize';
class UserToRoles extends Model { }

UserToRoles.init({
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  rid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '角色id'
  }
}, {
  sequelize,
  tableName: 'sys_user_roles'
});

export default UserToRoles;