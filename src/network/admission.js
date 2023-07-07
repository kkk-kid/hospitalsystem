/* 入院管理 */

import { request } from "./request";

/* 办理住院手续 */
export function addinhospital(idnumber, name, gender, age,telnumber,bednum,date,situation,status) {
    return request({
        method: 'get',
        url: '/admission/addinhospital',
        params: {
            idnumber, name, gender, age,telnumber,bednum,date,situation,status
        }
    })
}

/* 收取押金 */
export function chargedeposit(payfee,idnum) {
    return request({
        method: 'get',
        url: '/paycharge',
        params: {
            payfee,idnum
        }
    })
}


/* 建立入院病历 */
export function addhospitalcase(recordid,name,gender,age,symptom,medication,result,dname,dno) {
    return request({
        method: 'get',
        url: '/admission/addhospitalcase',
        params: {
            recordid,name,gender,age,symptom,medication,result,dname,dno
        }
        
    })
}

/* 病人登记表 */
export function getpatientinfo(){
    return request({
        method: 'get',
        url: '/admission/getpatient'
    })
}