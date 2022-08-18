
/*
 * @Author: zws
 * @Date: 2021-02-25 11:09:50
 * @LastEditTime: 2022-08-17 14:44:13
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: 用户操作
 * @FilePath: \serve\src\routes\api\dataAnalysis.js
 */
import KoaRouter from 'koa-router';
import DataAnalysisController from '@/controller/DataAnalysisController';

const router = new KoaRouter();
router.prefix('/dataAnalysis')

router.get('/charts/jsRuntimeError', DataAnalysisController.jsRuntimeError);
export default router;