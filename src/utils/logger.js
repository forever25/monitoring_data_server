import path from 'path';
import log4js from 'koa-log4';

log4js.configure({
    appenders: {
        access: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', //生成文件的规则
            alwaysIncludePattern: true,
            encoding: "utf-8",
            filename: path.join(__dirname, '../log/access/access.log') //生成文件名
        },
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: "utf-8",
            filename: path.join(__dirname, '../log/application/application.log')
        },
        out: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['out'], level: 'INFO' },
        access: { appenders: ['access'], level: 'DEBUG' },
        application: { appenders: ['application'], level: 'WARN' }
    }
});

// 记录系统日志
export const accessLogger = () => log4js.koaLogger(log4js.getLogger('access'));
export const logger = log4js.getLogger('application');  //记录所有应用级别的日志


