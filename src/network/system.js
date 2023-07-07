import { request } from "./request";

/* 获取职工信息 */
export function getdoctorinfo() {
    return request({
        method: 'get',
        url: '/system/getdoctorinfo'
    })
}

export function getnurseinfo() {
    return request({
        method: 'get',
        url: '/system/getnurseinfo'
    })
}

/* 修改职工编号 */
export function updatedoctorinfo(newnumber,oldnumber) {
    return request({
        method: 'get',
        url: '/system/updatedoctor',
        params: {
            newnumber,oldnumber
        }
    })
}

export function updatenurseinfo(newnumber,oldnumber) {
    return request({
        method: 'get',
        url: '/system/updatenurse',
        params: {
            newnumber,oldnumber
        }
    })
}

/* 获取项目费用明细表 */
export function getitemfeelist() {
    return request({
        method: 'get',
        url: '/system/getitemfeelist'
    })
}

/* 修改项目收费价格 */
export function updateitemfee(price, itemnum) {
    return request({
        method: 'get',
        url: '/system/updateitemfeelist',
        params: {
            price, itemnum
        }
    })
}