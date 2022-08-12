/*
 * @Author: zws
 * @Date: 2021-02-25 11:09:50
 * @LastEditTime: 2022-08-09 15:33:07
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: 用户操作
 * @FilePath: \serve\src\routes\api\project.js
 */
import KoaRouter from 'koa-router';
import ProjectController from '@/controller/ProjectController';

const router = new KoaRouter();
router.prefix('/project')

router.get('/list', ProjectController.list);
router.post('/save', ProjectController.save);
router.patch('/:id', ProjectController.patch);
router.delete('/:id', ProjectController.del);
export default router;