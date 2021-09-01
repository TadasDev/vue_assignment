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
        error: false,
        totalPages: '',
        pages: [],
        page: [],
        currentIndex: 0
    },
    mutations: {
        setAll(state, data) {
            state.data = []
            state.data = data
        },
        SetIndex(state, index) {
            state.currentIndex = index
            state.page = state.pages[index]
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
        async getData(context) {
            await fetch(`http://167.99.138.67:4545/giveaways/all`)
                .then(response => response.json())
                .then(data =>
                    context.commit('setAll', data)
                )
            const arrayLength = context.state.data.length
            const numOfPages = context.state.data.length / 10
            context.state.totalPages = Math.ceil(numOfPages)

            for (let i = 0; i < arrayLength; i += 10) {
                const piece = context.state.data.slice(i, i + 10)
                context.state.pages.push(piece)
            }
            if (context.state.currentIndex === 0) {
                context.state.page = context.state.pages[0]
            }
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
            const arrayLength = context.state.sortedData.length
            const numOfPages = context.state.sortedData.length / 10
            context.state.totalPages = Math.ceil(numOfPages)

            context.state.pages = []
            for (let i = 0; i < arrayLength; i += 10) {
                const piece = context.state.sortedData.slice(i, i + 10)
                context.state.pages.push(piece)
            }
            console.log( context.state.pages)
            if (context.state.currentIndex === 0) {
                context.state.page = context.state.pages[0]
            }
        },
    },
    modules: {},

})
