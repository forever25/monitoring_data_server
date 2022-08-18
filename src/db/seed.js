/*
 * @Author: your name
 * @Date: 2021-05-07 20:49:26
 * @LastEditTime: 2022-08-18 21:12:23
 * @LastEditors: zws
 * @Description: In User Settings Edit
 * @FilePath: \monitoring_data_server\src\db\seed.js
 */
import path from 'path';
import requireContext from 'require-context';

const modelFiles = requireContext(path.join(__dirname, './models'), true, /\.js$/);
const seedFiles = requireContext(path.join(__dirname, './seeds'), true, /\.js$/);

(async () => {
    let pro = modelFiles.keys().map(async (fileName) => {
        let it = modelFiles(fileName);
        await it.default.sync({ force: true })
        console.log(`已经同步模型${fileName}`);
    })
    await Promise.all(pro);
    seedFiles.keys().forEach(async (fileName) => {
        seedFiles(fileName);
        console.log(`已运行${fileName}种子文件`)
    });
    console.log('种子文件执行完成')
})();


