/**
 * Create by zechun.chen on 2016/12/22
 */

import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        com
    },
    strict:process.env.NODE_ENV !== 'production'
})

export default store;