import { request } from "./request";

export function getuser(){
    return request({
        method: 'get',
        url: '/admission/getpatient'
    })
    
}