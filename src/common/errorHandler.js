// import config from "../config";

/*
 * @Author: your name
 * @Date: 2021-02-22 15:08:05
 * @LastEditTime: 2022-08-05 13:37:34
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\common\errorHandler.js
 */
import { responseTemplate } from '@/utils/responseTemplate';
import { logger } from "@/utils/logger"
export default (ctx, next) => {
    return next().catch((err) => {
        if (err.status == 401) {
            ctx.status = 401;
            ctx.body = responseTemplate('Not webToken', 401);
        } else if (err.status == 404) {
            ctx.status = 404;
            ctx.body = responseTemplate({
                path: ctx.path
            }, 404);
        } else {
            ctx.status = 500;
            ctx.body = responseTemplate(err, 500);
        }
        logger.error(err)
    });
}