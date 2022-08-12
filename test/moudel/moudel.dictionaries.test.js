/*
 * @Author: your name
 * @Date: 2021-04-27 11:13:15
 * @LastEditTime: 2021-05-03 21:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auth\test\moudel\moudel.dictionaries.test.js
 */

import Dictionaries from '@/db/models/Dictionaries';

test('test Dictionaries model attribute', () => {
    //build会在内存模型中构建一个User对象，但不会提交到数据库中
    const dictionarie = Dictionaries.build({
        keys: 'zhangsan',
        values: '123456',
    })
    // 验证各个属性
    expect(dictionarie.keys).toBe('zhangsan')
    expect(dictionarie.values).toBe('123456')
})
