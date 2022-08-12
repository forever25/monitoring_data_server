/*
 * @Author: zws
 * @Date: 2021-05-28 17:08:59
 * @LastEditTime: 2022-08-09 15:29:03
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: 用户权限表控制类
 * @FilePath: \serve\src\controller\RoleController.js
 */
import Roles from '@/db/models/Roles'
import { Op } from "@/db/sequelize"
import { responseTemplate } from '@/utils/responseTemplate'
import { deleteObjectUndefined } from "@/utils/tools"

class RoleController {
    /**
     * @description: 获取用户列表
     * @param {*} ctx
     * @return {*}
     */
    async list(ctx) {

        let { pageIndex, pageSize, roleName = '' } = ctx.request.body
        pageIndex = Number(pageIndex)
        pageSize = Number(pageSize)

        // 判断页码类型和值是否合法
        if (pageIndex !== pageIndex || pageSize !== pageSize || pageIndex <= 0 || pageSize <= 0) {
            ctx.body = responseTemplate('选择正确的页码', -1)
            return
        }

        // // 查找所有角色，并进行分页
        const records = await Roles.findAndCountAll({
            offset: (pageIndex - 1) * pageSize,
            limit: pageSize - 0,
            where: {
                roleName: {
                    [Op.like]: `%${roleName}%`
                }
            }
        })
        ctx.body = responseTemplate({
            records: records.rows,
            total: records.count,
        })

    }

    async save(ctx) {
        let { roleCode, roleName, isDefault = 0 } = ctx.request.body
        isDefault = Number(isDefault)
        if (!roleCode && !roleName) {
            ctx.body = responseTemplate('请传入完整的参数', 500)
            return
        }
        const role = await Roles.create({
            roleCode,
            roleName,
            isDefault
        })
        if (isDefault === 1) {
            await Roles.update({
                isDefault: 0
            },
                {
                    where: {
                        id: {
                            [Op.ne]: role.id
                        }
                    }
                });
        }

        ctx.body = responseTemplate(role)

    }

    async patch(ctx) {
        const { id } = ctx.params
        const { roleCode, roleName, isDefault } = ctx.request.body
        const updateData = {
            roleCode,
            roleName,
            isDefault
        }
        deleteObjectUndefined(updateData)

        await Roles.update(updateData, {
            where: {
                id
            }
        })
        ctx.body = responseTemplate({
            message: '更新成功'
        })

    }

    async del(ctx) {
        const { id } = ctx.params
        if (id) {
            return ctx.body = responseTemplate('请传入id', 500)
        }
        await Roles.destroy({
            where: {
                id
            }
        })
        ctx.body = responseTemplate("删除成功", 200)
    }
}

export default new RoleController()
