/*
 * @Author: zws
 * @Date: 2021-05-28 17:24:21
 * @LastEditTime: 2022-08-15 15:40:18
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description:
 * @FilePath: \serve\src\routes\api\role.js
 */
import KoaRouter from 'koa-router';
import RoleController from '@/controller/RoleController';

const router = new KoaRouter();
router.prefix('/role');

router.get('/list', RoleController.list);
router.post('/save', RoleController.save);
router.patch('/:id', RoleController.patch);
router.delete('/:id', RoleController.del);


export default router;