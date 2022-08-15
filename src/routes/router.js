/*
 * @Author: zws
 * @Date: 2021-02-22 20:45:50
 * @LastEditTime: 2022-08-15 15:32:35
 * @LastEditors: GY\wangshengz wangshengz@goyu-ai.com
 * @Description: 路由汇总
 * @FilePath: \serve\src\routes\router.js
 */
import koaCombineRouters from "koa-combine-routers";
const apiFiles = require.context('./api', true, /\.js$/);
const api = apiFiles.keys().reduce((items, path) => {
    const value = apiFiles(path);
    items.push(value.default);
    return items;
}, []);



export default koaCombineRouters(api);