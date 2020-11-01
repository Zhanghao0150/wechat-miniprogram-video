import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		videoContext:null
	},
    mutations: {
		setVideoContext(state,obj){
			state.videoContext = obj
		}
	},
    actions: {}
})
export default store