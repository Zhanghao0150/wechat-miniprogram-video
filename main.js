import Vue from 'vue'
import App from './App'
import {init} from '@/api/user.js'
Vue.config.productionTip = false
Vue.prototype.$ret = function(){
	uni.navigateBack({
		delta:1
	})
}
Vue.prototype.$appid = 'wx58ef42dc8fd21810';
const $init = async function(){
	const res = await init();
	const token = res.data.token;
	Vue.prototype.$token = token;
}
Vue.prototype.$init = $init;

//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
App.mpType = 'app'

// 引入加载插件
import ourLoading from '@/components/our-loading/our-loading.vue'
Vue.component('ourLoading', ourLoading)

const app = new Vue({
    ...App,
	store
})
app.$mount()
