import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		videoContext:null,
		shareVideoId:null
	},
    mutations: {
		setVideoContext(state,obj){
			state.videoContext = obj
		},
		setShareVideoId(state,Num){
			state.shareVideoId = Num
		}
	},
    actions: {}
})
export default store