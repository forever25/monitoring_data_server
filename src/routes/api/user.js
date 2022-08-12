/*
 * @Author: zws
 * @Date: 2021-05-28 17:24:21
 * @LastEditTime: 2022-08-09 14:21:11
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description:
 * @FilePath: \serve\src\routes\api\user.js
 */
import KoaRouter from 'koa-router';
import UserController from '@/controller/UserController';

const router = new KoaRouter();
router.prefix('/user');

router.get('/list', UserController.list);
router.get('/:username', UserController.userInfo);
router.post('/save', UserController.save);
router.patch('/:id', UserController.patch);
router.delete('/:id', UserController.del);

export default router;