/*
 * @Author: zws
 * @Date: 2021-02-25 11:09:50
 * @LastEditTime: 2022-08-11 17:02:28
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: 用户操作
 * @FilePath: \serve\src\routes\api\login.js
 */
import KoaRouter from 'koa-router';
import LoginController from '@/controller/LoginController';

const router = new KoaRouter();
router.prefix('/user')

router.post('/login', LoginController.login) // 用户登录
router.post('/registration', LoginController.registration) // 用户注册
router.get('/registration_verification', LoginController.registration_verification) // 注册校验

export default router;
