import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        ossClient: '',
        notificationSocket: ''
    },
    // mutations: {},
    // actions: {}
})

export default store