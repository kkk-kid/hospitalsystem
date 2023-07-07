let express = require('express')
let router = express.Router()
let user = require('./api/user')

router.get('/user', user.get)




/* 入院管理 */
let admission = require('./api/admission')
router.get('/admission/addinhospital',admission.addinhospital)  //办理住院手续
router.get('/admission/addhospitalcase',admission.addhospitalcase) /* 建立入院病历 */
router.get('/paycharge',admission.paycharge)  /* 支付押金 */
router.get('/admission/getpatient',admission.getpatient) //获取病人登记表

/* 住院管理 */
let hospitalization = require('./api/hospitalization')
router.get('/hospitalization/getbedinfo',hospitalization.getbedinfo) /* 获取病床信息 */
router.get('/hospitalization/getwardrecords',hospitalization.getwardrecords) /* 每日查房记录 */
router.get('/hospitalization/addwardrecords',hospitalization.addwardrecords)/* 新增查房记录 */
router.get('/hospitalization/getdalybill',hospitalization.getdalybill)/* 病人日账单记录 */
router.get('/hospitalization/adddaybill',hospitalization.adddaybill) /* 新增病人日账单 */
router.get('/hospitalization/itemfeelist',hospitalization.itemfeelist) /* 项目费用明细表 */
router.get('/hospitalization/fundform',hospitalization.fundform)  /* 资金报表 */
router.get('/hospitalization/dayfundform',hospitalization.dayfundform)  /* 某日资金报表 */

/* 出院管理 */
let discharge = require('./api/discharge')
router.get('/discharge',discharge.gettotalfeelist)  //出院结算账单


/* 系统维护 */
let system = require('./api/system')
router.get('/system/getdoctorinfo',system.getdoctorinfo) /* 获取职工信息 */
router.get('/system/getnurseinfo',system.getnurseinfo)
router.get('/system/updatedoctor',system.updatedoctor) /* 修改职工信息 */
router.get('/system/updatenurse',system.updatenurse)
router.get('/system/getitemfeelist',system.getitemfeelist) /* 项目费用明细 */
router.get('/system/updateitemfeelist',system.updateitemfeelist)    /* 修改项目明细费用 */


module.exports = router