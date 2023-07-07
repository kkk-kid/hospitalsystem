import { request } from "./request";

export function getbedinfo(date) {  //获取病床信息
    return request({
        method: 'get',
        url: '/hospitalization/getbedinfo',
        params: {
            date
        }
    })
}

export function getwardrecords(date) {  //获取查房信息
    return request({
        method: 'get',
        url: '/hospitalization/getwardrecords',
        params: {
            date
        }
    })
}

/* 添加查房信息 */
export function addwardrecords(bednum,date,staffno,situation,orders) {
    return request({
        method: 'get',
        url: '/hospitalization/addwardrecords',
        params: {
            bednum,date,staffno,situation,orders
        }
    })
}

export function getdalybill(date) {//获取病人日账单
    return request({
        method: 'get',
        url: '/hospitalization/getdalybill',
        params: {
            date
        }
    })
}

/* 添加病人日账单 */
export function adddaybill(idnum,date,name,medicationcost,laboratorycost,bedcost,surgerycost) {
    return request({
        method: 'get',
        url: '/hospitalization/adddaybill',
        params: {
            idnum,date,name,medicationcost,laboratorycost,bedcost,surgerycost,
        }
    })
}

export function getitemfeelist() {  //获取项目费用明细
    return request({
        method: 'get',
        url: '/hospitalization/itemfeelist',    
    })
}


//获取资金报表
export function getfunform() {
    return request({
        method: 'get',
        url: '/hospitalization/fundform'
    })
}

export function getdayfunform(date) {
    return request({
        method: 'get',
        url: '/hospitalization/dayfundform',
        params: {
            date
        }
    })
}