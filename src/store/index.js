import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
        item: {},
        sortBy: {
            types: ['game', 'loot', 'beta'],
            platforms: ['pc', 'steam', 'epic-games-store', 'ubisoft',
                'gog', 'itchio', 'ps4', 'xbox-one', 'switch', 'android'
                , 'ios', 'vr', 'battlenet', 'origin', 'drm-free'],
            categories: ['date', 'value', 'popularity']
        },
        selected: [],
        sortedData: [],
        errorMessage: {},
        error:false
    },
    mutations: {
        setAll(state, data) {
            state.data = data
        },
        setItem(state, item) {
            state.item = item
        },
        sortedData(state, data) {
            state.error = false
            state.sortedData = []
            state.sortedData = data

        },
        setMessage(state, message) {
            state.errorMessage = {}
            state.errorMessage = message
            state.error = true
        }

    },
    actions: {
        getData(context) {
            fetch(`http://167.99.138.67:4545/giveaways/all`)
                .then(response => response.json())
                .then(data => context.commit('setAll', data))
        },
        async getItem(context, id) {
            const res = await fetch(`http://167.99.138.67:4545/giveaways/id/${id}`)
            const item = await res.json()
            context.commit('setItem', item)
        },
        async getSortedData(context) {

            const type = context.state.selected.type
            const platform = context.state.selected.platform
            const category = context.state.selected.category

            const res = await fetch(`http://167.99.138.67:4545/giveaways/sort/${platform}/${type}/${category}`)
            const data = await res.json()
            if (data.status === 0) {
                context.commit('setMessage', data.status_message)
            } else {
                context.commit('sortedData', data)
            }


        },
    },
    modules: {},

})
