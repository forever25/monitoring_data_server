import { sequelize, Model, DataTypes } from '@/db/sequelize';

class ResourceLoadingError extends Model { }

ResourceLoadingError.init({
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
    comment: '文档标题'
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
  tagName: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '错误的标签名称'
  },
  fileName: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '资源加载名称'
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
  tableName: 'sys_resource_loading_error'
});

export default ResourceLoadingError;