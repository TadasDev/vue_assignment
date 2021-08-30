import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
        item:{}
    },
    mutations: {
        setAll(state, data) {
            state.data = data
            // console.log(data)
        },
        setItem(state, item){
            state.item = item
        }

    },
    actions: {
            async getItem(context, id) {
                const res = await fetch(`http://167.99.138.67:4545/giveaways/id/${id}`)
                const item = await res.json()
                context.commit('setItem', item)
        },
    },
    modules: {},

})
