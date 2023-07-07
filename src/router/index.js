import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router)


const home = () => import("@/views/home/HomePage")

//登录
const login = () => import("@/views/login/LoginPage")

//入院管理
const inhospital = () => import("@/views/Inhospital/InHospital")
const inhospro = () => import("@/views/inhospro/InHosPro")
const hosrecord = () => import("@/views/hosrecords/HosRecords")
const pregform =() => import("@/views/pregform/PRegForm")

//住院管理
const management = () => import("@/views/management/ManegementPage")
const bedinfo = () => import("@/views/bedinfo/BedInfo")
const warcheck =() => import("@/views/wardcheck/WardCheck")
const wardcheckinfo = () => import("@/views/wardcheckinfo/WardCheckInfo")
const daybill = () => import("@/views/daybill/DayBill")
const daybilladd = () => import("@/views/daybilladd/DayBillAdd")
const feeitem = () => import("@/views/feeitem/FeeItem")
const fundsform = () => import("@/views/fundsform/FundsForm")
const deposit = () => import("@/views/deposit/DepositPage")

//出院管理
const outhospital = () => import("@/views/outhospital/OutHospital")
const discharge = () => import("@/views/discharge/DischargePage")
const feedetails = () => import("@/views/feedetails/FeeDetails")

//系统维护
const system = () => import("@/views/system/SystemPage")
const idchange = () => import("@/views/idchange/IdChange")
const staffinfo = () => import("@/views/staffinfo/StaffInfo")
const changeitemsfee = () => import("@/views/changeitemsfee/ChangeItemsFee")
const itemrevise = () => import("@/views/itemrevise/ItemRevise")

const routes = [
    //登录
    {
        path: '/login',
        component: login
    },
    //主页
    {
        path: '',
        redirect: '/login',
    },
    {
        path: '/home',
        component: home
    },
    
    //入院管理
    {
        path: '/inhospital',
        component: inhospital
    },
    {
        path: '/inhospro',
        component: inhospro,
    },
    {
        path: '/hosrecords',
        component: hosrecord
    },
    {
        path: '/pregform',
        component: pregform,
    },
    {
        path: '/deposit',
        component: deposit
    },

    //住院管理
    {
        path: '/management',
        component: management,
    },
    {
        path: '/bedinfo',
        component: bedinfo
    },
    {
        path: '/warcheck',
        component: warcheck
    },
    {
        path: '/wardcheckinfo',
        component: wardcheckinfo
    },
    {
        path: '/daybill',
        component: daybill
    },
    {
        path: '/daybilladd',
        component: daybilladd
    },
    {
        path: '/feeitem',
        component: feeitem
    },
    {
        path: '/fundsform',
        component: fundsform
    },

    //出院管理
    {
        path: '/outhospital',
        component: outhospital
    },
    {
        path: '/discharge',
        component: discharge
    },
    {
        path: '/feedetails',
        component: feedetails
    },
    //系统维护
    {
        path: '/system',
        component: system
    },
    {
        path: '/idchange',
        component: idchange
    },
    {
        path: '/staffinfo',
        component: staffinfo
    },
    {
        path: '/changeitemsfee',
        component: changeitemsfee
    },
    {
        path: '/itemrevise',
        component: itemrevise
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router