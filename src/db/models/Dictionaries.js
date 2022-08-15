import { sequelize, Model, DataTypes } from '@/db/sequelize'

class Dictionaries extends Model { }

Dictionaries.init({
	key: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		comment: '用户字典字段',
	},
	value: {
		type: DataTypes.STRING,
		allowNull: false,
		comment: '用户字典字值',
	},
	name: {
		type: DataTypes.STRING,
		defaultValue: '',
		comment: '别名',
	},
	status: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		validate: {
			isNumeric: true,
		},
		comment: '0激活,1禁用,2回收站',
	},
},
	{
		sequelize,
		tableName: 'sys_dictionaries',
	}
)

export default Dictionaries
