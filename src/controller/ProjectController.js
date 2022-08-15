/*
 * @Author: your name
 * @Date: 2021-02-22 15:25:56
 * @LastEditTime: 2022-08-15 16:06:07
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\controller\ProjectController.js
 */
import { responseTemplate } from '@/utils/responseTemplate';
import Project from '@/db/models/Project'
import { deleteObjectUndefined } from "@/utils/tools"
import { Op } from "@/db/sequelize"
class ProjectController {
    /**
     * @description: 获取用户列表
     * @param {*} ctx
     * @return {*}
     */
    async list(ctx) {
        let { pageIndex, pageSize, projectName = '' } = ctx.request.body
        pageIndex = Number(pageIndex)
        pageSize = Number(pageSize)

        // 判断页码类型和值是否合法
        if (pageIndex !== pageIndex || pageSize !== pageSize || pageIndex <= 0 || pageSize <= 0) {
            ctx.body = responseTemplate('选择正确的页码', -1)
            return
        }

        const records = await Project.findAndCountAll({
            offset: (pageIndex - 1) * pageSize,
            limit: pageSize,
            where: {
                projectName: {
                    [Op.like]: `%${projectName}%`
                }
            }
        })
        console.log(records)
        ctx.body = responseTemplate({
            records: records.rows,
            total: records.count,
        })

    }

    async save(ctx) {
        let { projectName, projectToken, projectDescribe = "" } = ctx.request.body
        if (!projectName && !projectToken) {
            ctx.body = responseTemplate('请传入完整的参数', 500)
            return
        }
        const project = await Project.create({
            projectName,
            projectToken,
            projectDescribe
        })

        ctx.body = responseTemplate(project)
    }

    async patch(ctx) {
        const { id } = ctx.params
        let { projectName, projectToken, projectDescribe = "" } = ctx.request.body


        const updateData = {
            projectName,
            projectToken,
            projectDescribe
        }
        deleteObjectUndefined(updateData)
        await Project.update(updateData, {
            where: {
                id
            }
        })
        ctx.body = responseTemplate('更新成功', 200)

    }

    async del(ctx) {
        const { id } = ctx.params
        if (id === undefined) {
            return ctx.body = responseTemplate('请传入id', 500)
        }
        await Project.destroy({
            where: {
                id
            }
        })
        ctx.body = responseTemplate("删除成功", 200)

    }
}

export default new ProjectController();