/*
 * @Author: your name
 * @Date: 2021-02-25 10:18:14
 * @LastEditTime: 2021-05-28 17:34:12
 * @LastEditors: zws
 * @Description: In User Settings Edit
 * @FilePath: \serve\src\utils\dictionaries.js
 */
import Dictionaries from '@/db/models/Dictionaries';

/**
 * @description: 字典表的增删改查
 * @param {*} type 需要操作的类型get,inster,update,del
 * @param {*} key 需要操作的字段
 * @param {*} value 只有插入，更新需要用到这个参数
 * @return {*}
 */
export async function dictionaries(type, key, value = undefined) {
    let response = null
    if (type === 'get') {
        response = await Dictionaries.findAll({
            attributes: ['value'],
            where: {
                key: key,
                status: 0
            }
        })
    } else if (type === 'inster') {
        if (value) {
            response = await Dictionaries.create({ key: key, value: value })
        } else {
            console.log(new error('请填写value'))
            return null;
        }

    } else if (type === 'update') {
        if (value) {
            response = await Dictionaries.update({ value: value },
                {
                    where: {
                        key: key
                    }
                });
        } else {
            console.log(new error('请填写value'))
            return null;
        }
    } else if (type === 'del') {
        response = await Dictionaries.update(
            {
                where: {
                    key: key
                }
            });
    }

    return new Promise((resolve, reject) => {
        if (response !== null) {
            resolve(response);
        } else {
            reject([])
        }
    })
}