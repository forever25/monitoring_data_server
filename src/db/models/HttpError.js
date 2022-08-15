import { sequelize, Model, DataTypes } from '@/db/sequelize';

class HttpError extends Model { }

HttpError.init({
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
  url: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: 'url'
  },
  method: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '请求方式'
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: "",
    comment: '请求类型'
  },
  body: {
    type: DataTypes.STRING,
    defaultValue: "",
    comment: '参数信息'
  },
  res: {
    type: DataTypes.STRING,
    defaultValue: "",
    comment: '返回信息'
  },
  status: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '返回错误状态值'
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
  tableName: 'sys_http_error'
});

export default HttpError;