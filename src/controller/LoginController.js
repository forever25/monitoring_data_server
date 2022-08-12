/*
 * @Author: your name
 * @Date: 2021-02-22 15:25:56
 * @LastEditTime: 2022-08-09 14:46:12
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\controller\LoginController.js
 */
import jsonwebtoken from 'jsonwebtoken';
import { responseTemplate } from '@/utils/responseTemplate';
import Users from '@/db/models/Users'
import Roles from '@/db/models/Roles'
import UserToRoles from "@/db/models/UserToRoles"
import regular from '@/utils/regular'
import { encrypt } from '@/utils/md5';
import config from "@/config/index"
class LoginController {
    async login(ctx) {
        const { username, password } = ctx.request.body;
        console.log(username)
        if (username === undefined || !regular.name.test(username)) {
            return ctx.body = responseTemplate('用户名为数字、字母和中文组成，开头不能为数字2 - 16位', -1)
        }
        const user = await Users.findOne({
            where: {
                username,
                password: encrypt(password + encrypt(username))
            }
        })

        if (user && user.id) {
            const token = jsonwebtoken.sign({
                userId: user.id,
                username: user.username,
            }, config.JWT_SECRET, {
                expiresIn: '1d'
            })
            return ctx.body = responseTemplate({ token })
        } else {
            return ctx.body = responseTemplate('用户名或密码错误', -1)
        }
    }

    async registration(ctx) {
        const { username, password, phone, email } = ctx.request.body;
        if (username === undefined || !regular.name.test(username)) {
            return ctx.body = responseTemplate('用户名为数字、字母和中文组成，开头不能为数字2 - 16位', 500)
        }
        if (email === undefined || !regular.mail.test(email)) {
            return ctx.body = responseTemplate('请输入正确的电子邮件地址', 500)
        }

        const isUser = await Users.findOne({
            where: {
                username
            }
        })

        if (isUser?.id !== undefined) {
            const user = await Users.create({
                username,
                password,
                phone,
                email
            })

            ctx.body = responseTemplate(user)
            // 用户和角色关联
            const role = await Roles.findOne({
                where: {
                    isDefault: 1
                }
            })
            if (role.id !== undefined) {
                await UserToRoles.create({
                    uid: user.id,
                    rid: role.id
                })
            }
        } else {
            ctx.body = responseTemplate('当前用户已存在', 500)
        }
    }

    async registration_verification(ctx) {
        const { username } = ctx.request.body;
        const user = await Users.findOne({
            where: {
                username
            }
        })
        if (user?.id) {
            ctx.body = responseTemplate({
                isRegistration: false,
                message: "当前用户已存在"
            }, 200)
        } else {
            ctx.body = responseTemplate({
                isRegistration: true,
                message: "当前用户不存在"
            }, 200)
        }
    }

}

export default new LoginController();