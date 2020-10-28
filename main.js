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
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
