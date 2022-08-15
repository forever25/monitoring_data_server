import { sequelize, Model, DataTypes } from '@/db/sequelize';

class Dictionaries extends Model { }

Dictionaries.init({
  projectName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '项目名称'
  },
  projectToken: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '项目token'
  },
  projectDescribe: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '项目描述'
  },
}, {
  sequelize,
  tableName: 'sys_project'
});

export default Dictionaries;