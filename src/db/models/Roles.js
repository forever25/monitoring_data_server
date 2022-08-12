import { sequelize, Model, DataTypes } from '@/db/sequelize';
// import regular from '@/utils/regular'

class Roles extends Model { }

Roles.init({
    roleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '角色名称'
    },
    roleCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '角色代码'
    },
    isDefault: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isNumeric: true,
        },
        comment: '0非默认角色,1默认角色'
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isNumeric: true,
        },
        comment: '0激活,1禁用,2回收站'
    }
}, {
    sequelize,
    tableName: 'sys_roles'
});

export default Roles;