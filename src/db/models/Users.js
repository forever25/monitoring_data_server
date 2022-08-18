import { sequelize, Model, DataTypes } from '@/db/sequelize';
import regular from '@/utils/regular'

class Users extends Model { }

Users.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: regular.name,
    },
    comment: "用户名"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "密码"
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    comment: "电子邮件"
  },
  phone: {
    type: DataTypes.STRING,
    validate: {
      is: regular.phone,
    },
    comment: '手机号码'
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      isNumeric: true,
    },
    comment: '0激活,1禁用,2回收站'
  },
  projectToken: {
    type: DataTypes.STRING,
    defaultValue: "",
    comment: "当前用户所属token"
  }
}, {
  sequelize,
  tableName: 'sys_users'
});

export default Users;