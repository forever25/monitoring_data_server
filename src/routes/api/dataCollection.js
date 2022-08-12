/*
 * @Author: zws
 * @Date: 2021-02-25 11:09:50
 * @LastEditTime: 2022-08-11 13:54:30
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: 用户操作
 * @FilePath: \serve\src\routes\api\dataCollection.js
 */
import KoaRouter from 'koa-router';
import DataCollectionController from '@/controller/DataCollectionController';

const router = new KoaRouter();
router.prefix('/dataCollection')

router.post('/save', DataCollectionController.save);
export default router;