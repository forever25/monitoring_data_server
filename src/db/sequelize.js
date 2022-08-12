/*
 * @Author: your name
 * @Date: 2021-02-23 17:01:34
 * @LastEditTime: 2022-08-05 11:12:26
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\db\sequelize.js
 */


import { Sequelize, Model, DataTypes, Op } from "sequelize";
import { logger } from '@/utils/logger'
import config from '../config'
// 建立连接
const sequelize = new Sequelize(config.MYSQL_DATABASE, config.MYSQL_USER, config.MYSQL_PASSWORD, {
    host: config.MYSQL_HOST,
    dialect: "mysql",
    port: config.MYSQL_PORT,
    // operatorsAliases: false,
    pool: {
        max: 1000,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging(sql) {
        logger.error(sql);
    }
});

export { sequelize, Model, DataTypes, Op };
