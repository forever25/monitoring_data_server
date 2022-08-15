import { sequelize, Model, DataTypes } from '@/db/sequelize';

class PromiseError extends Model { }

PromiseError.init({
  token: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '项目token'
  },
  errorId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '错误id'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
    comment: '用时'
  },
  url: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: 'url'
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: "",
    comment: '错误类型'
  },
  msg: {
    type: DataTypes.STRING,
    defaultValue: "",
    comment: '报错信息'
  },
  timeStamp: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '发生的时间戳'
  },
  userAgent: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '浏览器版本信息'
  },

}, {
  sequelize,
  tableName: 'sys_promise_error'
});

export default PromiseError;