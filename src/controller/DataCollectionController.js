/*
 * @Author: your name
 * @Date: 2021-02-22 15:25:56
 * @LastEditTime: 2022-08-12 17:03:02
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\controller\DataCollectionController.js
 */
import { responseTemplate } from '@/utils/responseTemplate'
import Project from '@/db/models/Project'
import { deleteObjectUndefined } from '@/utils/tools'
class ProjectController {
    constructor() {
        this.dataType = [
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
        this.arrayDataType = [
            "promiseError",
            "jsRuntimeError",
            "apiError",
            "resourceLoadingError",
        ]
    }

    async save(ctx) {
        const params = ctx.request.body
        const paramKeys = Object.keys(params)
        for (let i = 0; i < paramKeys.length; i++) {
            if () {

            }

        }
    }
}

export default new ProjectController()
