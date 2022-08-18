import { sequelize, Model, DataTypes } from '@/db/sequelize';

class LoadTime extends Model { }

LoadTime.init({
  projectToken: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '项目projectToken'
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '数值类型'
  },
  errorId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '错误id'
  },
  timeConsumed: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
    comment: '用时'
  },
  url: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: 'url'
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
  screenWidth: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '屏幕宽度'
  },
  screenHeight: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '屏幕高度'
  },
  viewPointW: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '视口宽度'
  },
  viewPointH: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    comment: '视口高度'
  },
}, {
  sequelize,
  tableName: 'sys_load_time'
});

export default LoadTime;