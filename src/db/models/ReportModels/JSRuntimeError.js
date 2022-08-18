import { sequelize, Model, DataTypes } from '@/db/sequelize';

class JSRuntimeError extends Model { }

JSRuntimeError.init({
  projectToken: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '项目projectToken'
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
  error: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '错误堆栈'
  },
  fileName: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '文件名'
  },
  line: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '错误行号'
  },
  clo: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '错误列号'
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
  tableName: 'sys_js_runtime_error'
});

export default JSRuntimeError;