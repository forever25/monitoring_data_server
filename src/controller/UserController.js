/*
 * @Author: zws
 * @Date: 2021-05-28 17:08:59
 * @LastEditTime: 2022-08-15 15:09:18
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: 用户权限表控制类
 * @FilePath: \serve\src\controller\UserController.js
 */
import Roles from '@/db/models/Roles'
import UserToRoles from "@/db/models/UserToRoles"
import Users from '@/db/models/Users'
import { sequelize } from "@/db/sequelize"
import { responseTemplate } from '@/utils/responseTemplate'
import { encrypt } from '@/utils/md5';
import regular from '@/utils/regular'
import { deleteObjectUndefined } from "@/utils/tools"

class UserController {
  static updateUserRole(uid, rid) {
    return new Promise(async (resolve, reject) => {
      const [created] = await UserToRoles.findOrCreate({
        where: { uid },
        defaults: {
          rid
        }
      })
      if (created) {
      } else {
        await UserToRoles.update({
          rid
        }, {
          where: {
            uid
          }
        })
      }
      resolve(true)
    })
  }

  static createUserList({ username, pageIndex = 1, pageSize = 10 }) {
    return `select 
    su.id ,su.username ,IFNULL(NULL,'') as password,su.email ,su.phone ,su.status ,sr.roleName ,sr.roleCode ,sr.id roleId ,su.createdAt ,su.updatedAt
    from 
    monitor.sys_users su
    left join monitor.sys_user_roles sur  on su.id=sur.uid 
    left join monitor.sys_roles sr on sr.id=sur.rid 
    where 
    su.username like '%${username}%' limit ${(pageIndex - 1) * pageSize},${pageIndex * pageSize};`
  }
  /**
   * @description: 获取用户列表
   * @param {*} ctx
   * @return {*}
   */
  async list(ctx) {
    let { pageIndex, pageSize, username = '' } = ctx.request.body
    pageIndex = Number(pageIndex)
    pageSize = Number(pageSize)
    // 判断页码类型和值是否合法
    if (pageIndex !== pageIndex || pageSize !== pageSize || pageIndex <= 0 || pageSize <= 0) {
      ctx.body = responseTemplate('选择正确的页码', -1)
      return
    }

    // // 查找所有用户
    const records = await sequelize.query(UserController.createUserList({ username, pageIndex, pageSize }))
    const count = await sequelize.query('SELECT FOUND_ROWS() AS count')
    ctx.body = responseTemplate({
      records: records[0],
      total: count[0][0].count,
    })

  }

  async save(ctx) {
    const { username, password, phone, email, roleId } = ctx.request.body;
    if (username === undefined || !regular.name.test(username)) {
      return ctx.body = responseTemplate('用户名为数字、字母和中文组成，开头不能为数字2 - 16位', 500)
    }
    if (email === undefined || !regular.mail.test(email)) {
      return ctx.body = responseTemplate('请输入正确的电子邮件地址', 500)
    }

    const [users, created] = await Users.findOrCreate({
      where: {
        username
      },
      defaults: {
        password: encrypt(password + encrypt(username)),
        phone,
        email
      }
    })

    if (created) {
      if (roleId) {
        await UserController.updateUserRole(users.id, roleId)
      } else {
        const role = await Roles.findOne({
          where: {
            isDefault: 1
          }
        })
        if (role !== null) {
          await UserController.updateUserRole(users.id, role.id)
        }
      }
      delete users.password
      ctx.body = responseTemplate(users)
    } else {
      ctx.body = responseTemplate('当前用户已存在', 500)
    }
  }

  async patch(ctx) {
    const { id } = ctx.params
    if (Number(id) !== Number(id)) {
      return ctx.body = responseTemplate('请传入正确的id', 500)
    }
    const { username, password, phone, email, roleId } = ctx.request.body;
    const pwd = !password ? undefined : encrypt(password + encrypt(username))
    const updateData = {
      username,
      phone,
      email,
      password: pwd,
    }
    deleteObjectUndefined(updateData)

    const user = await Users.update(updateData, {
      where: {
        id
      }
    })

    // 用户和角色关联
    if (roleId) {
      await UserController.updateUserRole(id, roleId)
    }
    ctx.body = responseTemplate({
      message: '更新成功'
    })
  }

  async del(ctx) {
    const { id } = ctx.params
    if (Number(id) !== Number(id)) {
      return ctx.body = responseTemplate('请传入id', 500)
    }
    await Users.destroy({
      where: {
        id
      }
    })
    ctx.body = responseTemplate("删除成功", 200)
  }

  async userInfo(ctx) {
    const { username } = ctx.params;
    const userInfo = await sequelize.query(UserController.createUserList({ username }));
    ctx.body = responseTemplate(
      userInfo[0][0] ? userInfo[0][0] : {}
    )
  }
}

export default new UserController()
