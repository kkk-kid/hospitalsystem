import { request } from "./request";

/* 出院结算账单 */
export function gettotalfeelist(idnum) {
    return request({
        method: 'get',
        url: '/discharge',
        params: {
            idnum
        }
    })
}