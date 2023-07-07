import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
        expenselist: {},  //出院费用账单
        staffinfo: {},    //某一职工信息
        itemfeelist: {},  //病人收费账单
        payobject: ''     //支付人ID
    },
    mutations: {
        getexpenselist(state,expenselist) {  //获取出院费用账单
            state.expenselist = expenselist
        },
        getstaffinfo(state,staffinfo) {       //获取某一职工信息
            state.staffinfo = staffinfo
        },
        getitemfeelist(state,itemfeelist) {    //获取病人收费账单信息
            state.itemfeelist = itemfeelist
        },
        setPayID(state,ID) {
            state.payobject = ID
        }
    },
    actions: {
        
    },
    getters: {

    },
    modules: {
        
    }
})

export default store