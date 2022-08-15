/*
 * @Author: your name
 * @Date: 2021-02-22 15:25:56
 * @LastEditTime: 2022-08-15 16:48:00
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\controller\DataCollectionController.js
 */
import { responseTemplate } from '@/utils/responseTemplate'
import HttpError from '@/db/models/HttpError'
import JSRuntimeError from '@/db/models/JSRuntimeError'
import PromiseError from '@/db/models/PromiseError'
import ResourceLoadingError from '@/db/models/ResourceLoadingError'
import LoadTime from '@/db/models/LoadTime'
import Project from '@/db/models/Project'
// import { sequelize } from '@/db/sequelize'

const dataType = [
    'pv',
    'retentionTime',
    'unload',
    'redirect',
    'appCache',
    'dns',
    'tcp',
    'ssl',
    'ttfb',
    'response',
    'dom',
    'dcl',
    'resources',
    'domReady',
    'firstRenderTime',
    'firstInteractiveTime',
    'firstDataPackTime',
    'fullyLoadedTime',
    'onLoadTime',
    'promiseError',
    'jsRuntimeError',
    'httpError',
    'resourceLoadingError',
    'FCP',
    'DCL',
    'L',
    'TTI',
    'FP'
]
const arrayDataType = [
    "promiseError",
    "jsRuntimeError",
    "httpError",
    "resourceLoadingError",
]
class ProjectController {
    constructor() {

    }

    async save(ctx) {
        const { token } = ctx.request.headers
        if (token == undefined) {
            return ctx.body = responseTemplate('请传入项目token', 500)
        }
        const project = await Project.findOne({
            where: {
                projectToken: token
            }
        })
        if (project == null) {
            return ctx.body = responseTemplate('没有此项目token', 500)
        }

        const params = ctx.request.body
        const paramKeys = Object.keys(params)
        const promiseList = []
        const LoadTimeList = []


        for (let i = 0; i < paramKeys.length; i++) {
            ProjectController.addAttributesToken(params[paramKeys[i]], token)
            if (arrayDataType.includes(paramKeys[i])) {
                switch (paramKeys[i]) {
                    case "promiseError":
                        promiseList.push(PromiseError.bulkCreate(params[paramKeys[i]]));
                        break;
                    case "jsRuntimeError":
                        promiseList.push(JSRuntimeError.bulkCreate(params[paramKeys[i]]));
                        break;
                    case "HttpError":
                        promiseList.push(HttpError.bulkCreate(params[paramKeys[i]]));
                        break;
                    case "resourceLoadingError":
                        promiseList.push(ResourceLoadingError.bulkCreate(params[paramKeys[i]]));
                        break;
                }
            } else if (dataType.includes(paramKeys[i])) {
                LoadTimeList.push({
                    ...params[paramKeys[i]],
                    type: paramKeys[i],
                })
            }
        }

        promiseList.push(LoadTime.bulkCreate(LoadTimeList))

        try {
            await Promise.all(promiseList)
            ctx.body = responseTemplate('数据同步成功', 200)
        } catch (error) {
            ctx.body = responseTemplate(error, 500)
        }

    }
    static addAttributesToken(data, token) {
        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                data[i].token = token
            }
        } else {
            data.token = token
        }
    }
}

export default new ProjectController()
